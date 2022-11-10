<template lang="pug">
#share
  .share__title 各界大神
    span 接力分享
  #CurtainsCanvas
  ul.share__lists
    card(image="speaker-1", title="網站的動態趨勢", date="11/3（四）20:00 ~ 21:30", author="李明", position="版塊設計創辦人暨設計總監")
    card(image="speaker-2", title="jQuery 也可以做到的互動效果", date="11/10（四）20:00 ~ 21:30", author="Leo", position="Angular Taiwan 傳教士")
    card(image="speaker-3", title="做事不能拖拖拉拉，但網頁可以：draggable.js 介紹", date="11/17（四）20:00 ~ 21:30", author="邱繼緯", position="前端工程師")
    card(image="speaker-4", title="互動式網頁設計工程師該具備哪些技能？", date="11/24（四）20:00 ~ 21:30", author="吳哲宇", position="墨雨互動設計 創辦人、生成式藝術家")
</template>

<script>
import $ from "jquery";
import { Curtains, RenderTarget, Plane, ShaderPass } from "curtainsjs";
import card from "@/components/section_8_share-card.vue";

export default {
  name: "section_8_share",
  components: {
    card,
  },
  mounted: function () {
    let timer;
    timer = setTimeout(() => {
      randerCurains();
    }, 1000);
    $(window).on("resize", function () {
      clearTimeout(timer);
      $("#CurtainsCanvas").html("");
      timer = setTimeout(() => {
        randerCurains();
      }, 1000);
    });

    function randerCurains() {
      // we will keep track of all our planes in an array
      let scrollEffect = 0;

      // set up our WebGL context and append the canvas to our wrapper
      const curtains = new Curtains({
        container: "CurtainsCanvas",
        antialias: false, // render targets will disable default antialiasing anyway
        pixelRatio: Math.min(1.5, window.devicePixelRatio), // limit pixel ratio for performance
      });

      curtains
        .onRender(() => {
          // update our planes deformation
          // increase/decrease the effect
          scrollEffect = curtains.lerp(scrollEffect, 0, 0.05);
        })
        .onScroll(() => {
          // get scroll deltas to apply the effect on scroll
          const delta = curtains.getScrollDeltas();

          // invert value for the effect
          delta.y = -delta.y;

          // threshold
          if (delta.y > 50) {
            delta.y = 50;
          } else if (delta.y < -50) {
            delta.y = -50;
          }

          if (Math.abs(delta.y) > Math.abs(scrollEffect)) {
            scrollEffect = curtains.lerp(scrollEffect, delta.y, 0.5);
          }
        })
        .onError(() => {
          // we will add a class to the document body to display original images
          document.body.classList.add("no-curtains");
        })
        .onContextLost(() => {
          // on context lost, try to restore the context
          curtains.restoreContext();
        });

      // get our planes elements
      const planeElements = document.getElementsByClassName("plane");
      const smallPlaneElements = document.getElementsByClassName("small-plane");

      const distortionTarget = new RenderTarget(curtains);
      const rgbTarget = new RenderTarget(curtains);

      const vs = `
    precision mediump float;

    // default mandatory variables
    attribute vec3 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;

    uniform mat4 planeTextureMatrix;

    // custom variables
    varying vec3 vVertexPosition;
    varying vec2 vTextureMatrixCoord;

    void main() {

        vec3 vertexPosition = aVertexPosition;

        gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

        // varyings
        vVertexPosition = vertexPosition;
        vTextureMatrixCoord = (planeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
    }
`;

      const fs = `
    precision mediump float;

    varying vec3 vVertexPosition;
    varying vec2 vTextureMatrixCoord;

    uniform sampler2D planeTexture;

    void main() {
        // just display our texture
        gl_FragColor = texture2D(planeTexture, vTextureMatrixCoord);
    }
`;

      // add our planes and handle them
      for (let i = 0; i < planeElements.length; i++) {
        const plane = new Plane(curtains, planeElements[i], {
          vertexShader: vs,
          fragmentShader: fs,
        });

        plane.setRenderTarget(distortionTarget);
      }

      // add the small planes as well
      for (let i = 0; i < smallPlaneElements.length; i++) {
        const plane = new Plane(curtains, smallPlaneElements[i], {
          vertexShader: vs,
          fragmentShader: fs,
          texturesOptions: {
            // textures images will be reduced, use LINEAR_MIPMAP_NEAREST
            minFilter: curtains.gl.LINEAR_MIPMAP_NEAREST,
          },
        });

        plane.setRenderTarget(rgbTarget);
      }

      const distortionFs = `
    precision mediump float;

    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;

    uniform sampler2D uRenderTexture;

    uniform float uScrollEffect;

    void main() {
        vec2 textureCoords = vTextureCoord;
        vec2 texCenter = vec2(0.5, 0.5);

        // distort around scene center
        textureCoords.y += cos((textureCoords.x - texCenter.x) * 3.141592) * uScrollEffect / 500.0;

        gl_FragColor = texture2D(uRenderTexture, textureCoords);
    }
`;

      const distortionPass = new ShaderPass(curtains, {
        fragmentShader: distortionFs,
        renderTarget: distortionTarget,
        uniforms: {
          scrollEffect: {
            name: "uScrollEffect",
            type: "1f",
            value: 0,
          },
        },
      });

      distortionPass.onRender(() => {
        // update the uniform
        distortionPass.uniforms.scrollEffect.value = scrollEffect;
      });

      const rgbFs = `
    precision mediump float;

    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;

    uniform sampler2D uRenderTexture;

    uniform float uScrollEffect;

    void main() {
        vec2 textureCoords = vTextureCoord;

        vec2 redTextCoords = vec2(vTextureCoord.x, vTextureCoord.y - uScrollEffect / 650.0);
        vec2 greenTextCoords = vec2(vTextureCoord.x, vTextureCoord.y - uScrollEffect / 800.0);
        vec2 blueTextCoords = vec2(vTextureCoord.x, vTextureCoord.y - uScrollEffect / 900.0);

        vec4 red = texture2D(uRenderTexture, redTextCoords);
        vec4 green = texture2D(uRenderTexture, greenTextCoords);
        vec4 blue = texture2D(uRenderTexture, blueTextCoords);

        vec4 finalColor = vec4(red.r, green.g, blue.b, min(1.0, red.a + blue.a + green.a));
        gl_FragColor = finalColor;
    }
`;

      const rgbPass = new ShaderPass(curtains, {
        fragmentShader: rgbFs,
        renderTarget: rgbTarget,
        uniforms: {
          scrollEffect: {
            name: "uScrollEffect",
            type: "1f",
            value: 0,
          },
        },
      });

      rgbPass.onRender(() => {
        // update the uniform
        rgbPass.uniforms.scrollEffect.value = scrollEffect;
      });

      const blurFs = `
    precision mediump float;

    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;

    uniform sampler2D uRenderTexture;

    uniform float uScrollEffect;
    uniform vec2 uResolution;


    // taken from https://github.com/Jam3/glsl-fast-gaussian-blur
    vec4 blur5(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
        vec4 color = vec4(0.0);
        vec2 off1 = vec2(1.3333333333333333) * direction;
        color += texture2D(image, uv) * 0.29411764705882354;
        color += texture2D(image, uv + (off1 / resolution)) * 0.35294117647058826;
        color += texture2D(image, uv - (off1 / resolution)) * 0.35294117647058826;
        return color;
    }

    void main() {
        vec4 original = texture2D(uRenderTexture, vTextureCoord);
        vec4 blur = blur5(uRenderTexture, vTextureCoord, uResolution, vec2(0.0, 1.0));

        gl_FragColor = mix(original, blur, min(1.0, abs(uScrollEffect) / 5.0));
    }
`;

      let curtainsBBox = curtains.getBoundingRect();

      const blurPass = new ShaderPass(curtains, {
        fragmentShader: blurFs,
        uniforms: {
          scrollEffect: {
            name: "uScrollEffect",
            type: "1f",
            value: 0,
          },
          resolution: {
            name: "uResolution",
            type: "2f",
            value: [curtainsBBox.width, curtainsBBox.height],
          },
        },
      });

      blurPass.onRender(() => {
        // update the uniform
        blurPass.uniforms.scrollEffect.value = scrollEffect;
      });
    }
  },
};
</script>

<style lang="scss" scoped>
#share {
  @include rect(88vw, auto);
  max-width: 85.625rem;
  margin: calc($space-m * 5) auto calc($space-xl * 5) auto;
  z-index: 1;
  background: $c-bg;
}
#CurtainsCanvas {
  @include rect(100%, 120vh);
  @include fixed(0, -10vh, 0, b);
  pointer-events: none;
  z-index: -1;
}
.share {
  &__title {
    @include font(72, 1.5, $fw-primary, 5);
    text-align: center;
    margin-bottom: $space-s;
    color: $c-brand2;
    span {
      color: $c-text-primary;
    }
  }
  &__lists {
    @include rect(100%, auto);
    @include flex(row, space-between);
    flex-wrap: wrap;
  }
}
</style>
