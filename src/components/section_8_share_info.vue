<template lang="pug">
li.share__item.plane-wrapper.is-cursorHover
  .share__card.plane-inner
    .share__image.plane
      img(:src="require(`@/assets/images/${image}`)" data-sampler="planeTexture")
    p.share__tag 免費公開場
    .share__info
      h6.share__title {{ title }}
      p.share__date {{ date }}
      p.share__author {{ author }}
      p.share__position {{ position }}
</template>

<script>
import { Curtains, RenderTarget, Plane, ShaderPass } from "curtainsjs";

export default {
  name: "section_8_share_info",
  props: {
    image: String,
    title: String,
    date: String,
    author: String,
    position: String,
  },
  mounted: function () {
    // we will keep track of all our planes in an array
    let scrollEffect = 0;

    // set up our WebGL context and append the CurtainsCanvas to our wrapper
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
        if (delta.y > 100) {
          delta.y = 100;
        } else if (delta.y < -100) {
          delta.y = -100;
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
    const planeElements = document.querySelectorAll(".plane");
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

    // add the small planes as well
    planeElements.forEach((planeEl, i) => {
      const plane = new Plane(curtains, planeEl, {
        vertexShader: vs,
        fragmentShader: fs,
        texturesOptions: {
          // textures images will be reduced, use LINEAR_MIPMAP_NEAREST
          minFilter: curtains.gl.LINEAR_MIPMAP_NEAREST,
        },
      });
      plane.setRenderTarget(rgbTarget);
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
  },
};
</script>

<style lang="scss" scoped>
.share {
  &__item {
    flex: 0 0 33.3%;
  }
  &__image {
    @include img(300px, 300px);
    img {
      display: none;
    }
  }
  &__tag {

  }
  &__info {
    background: #999;
  }
}
.plane {
  @include img(300px, 300px);
}
</style>
