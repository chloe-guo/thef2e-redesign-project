<template lang="pug">
li.share__item.plane-wrapper
  .share__card.plane-inner
    .share__image.small-plane.js-cursorHover
      img(:src="require(`@/assets/images/${image}.jpg`)" data-sampler="planeTexture")
      p.share__tag.js-cursorHover 免費公開場
    .share__info.js-cursorHover
      .info__shadow
      .info__content
        h6.share__title {{ title }}
        p.share__date {{ date }}
        p.share__author {{ author }}
        p.share__position {{ position }}
</template>

<script>
import $ from "jquery";
import { Curtains, RenderTarget, Plane, ShaderPass } from "curtainsjs";

export default {
  name: "section_8_share-card",
  props: {
    image: String,
    title: String,
    date: String,
    author: String,
    position: String,
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

    let today = new Date();
    if (today < new Date("2022/11/3 21:30:00")) {
      $(".share__item:nth-child(1)").addClass("is-actived");
    } else if (today < new Date("2022/11/10 21:30:00")) {
      $(".share__item:nth-child(2)").addClass("is-actived");
    } else if (today < new Date("2022/11/17 21:30:00")) {
      $(".share__item:nth-child(3)").addClass("is-actived");
    } else if (today < new Date("2022/11/24 21:30:00")) {
      $(".share__item:nth-child(4)").addClass("is-actived");
    }
  },
};
</script>

<style lang="scss" scoped>
.share {
  &__item {
    flex: 0 0 600px;
    margin-bottom: calc($space-xxl * 3);
    &:nth-child(2n) {
      transform: translateY(calc($space-xxl * 1.5));
    }
    &.is-actived {
      .share {
        &__tag {
          background: $c-brand2;
        }
        &__info {
          .info {
            &__shadow {
              background: $c-brand2;
              &::before,
              &::after {
                background: $c-brand2;
              }
            }
          }
        }
      }
    }
  }
  &__card {
    @include rect(auto, 310px);
  }
  &__image {
    @include img(320px, 100%);
    img {
      display: none;
    }
  }
  &__tag {
    background: $c-brand1;
    @include poa(l, calc($space-xl * 1.5), 0, b);
    transform: translateX(25%);
    @include font(18);
    padding: calc($space-xs / 2) $space-s;
  }
  &__info {
    @include rect(360px, auto);
    color: $c-brand1-dark;
    @include font(16);
    @include poa(l, t, 0, 0);
    transform: translate(-10%, 40%);
    .info {
      &__shadow {
        @include rect;
        @include poa;
        background: $c-brand1-lighter;
        &::before {
          @include beaf;
          @include rect(calc($space-xs + 1px), calc($space-xs + 1px));
          background: $c-brand1-lighter;
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
          @include poa(0, t, r, 0);
          transform: translate(-5%, 90%);
        }
        &::after {
          @include beaf;
          @include rect(calc($space-xs + 1px), calc($space-xs + 1px));
          background: $c-brand1-lighter;
          clip-path: polygon(0% 0%, 0% 100%, 100% 100%);
          @include poa(l, 0, 0, b);
          transform: translate(90%, -5%);
        }
      }
      &__content {
        background: white;
        @include rect;
        padding: $space-s $space-m;
        transform: translate($space-xs, $space-xs);
      }
    }
  }
  &__title {
    @include font(20);
    color: $c-brand1;
    margin-bottom: $space-xs;
  }
  &__position {
    opacity: 0.7;
    @include font(14);
  }
}
.plane {
  @include img(320px, 310px);
}
</style>
