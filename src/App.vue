<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
  mounted: function () {
    //-------- webfont --------//
    (function (d) {
      var config = {
          kitId: "sjr6yjd",
          scriptTimeout: 3000,
          async: true,
        },
        h = d.documentElement,
        t = setTimeout(function () {
          h.className =
            h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
        }, config.scriptTimeout),
        tk = d.createElement("script"),
        f = false,
        s = d.getElementsByTagName("script")[0],
        a;
      h.className += " wf-loading";
      tk.src = "https://use.typekit.net/" + config.kitId + ".js";
      tk.async = true;
      tk.onload = tk.onreadystatechange = function () {
        a = this.readyState;
        if (f || (a && a != "complete" && a != "loaded")) return;
        f = true;
        clearTimeout(t);
        try {
          Typekit.load(config);
        } catch (e) {}
      };
      s.parentNode.insertBefore(tk, s);
    })(document);
    //-------- 100vh --------//
    let windowsVH = window.innerHeight / 100;
    document.documentElement.style.setProperty("--vh", windowsVH + "px");
    window.addEventListener("resize", function () {
      windowsVH = window.innerHeight / 100;
      document.documentElement.style.setProperty("--vh", windowsVH + "px");
    });
  },
};
</script>

<style lang="scss">
//-------- reset.scss --------//
html,
body {
  margin: 0px;
  padding: 0px;
  -webkit-text-size-adjust: 100% !important;
  text-size-adjust: 100% !important;
  font-family: "source-han-sans-traditional", "PingFang TC",
    "Microsoft JhengHei", sans-serif;
  @include font;
  color: $c-text-primary;
  background: $c-bg;
  .is-cubicFont {
    font-family: "dotgothic16", sans-serif;
  }
}

html {
  *,
  *::before,
  *::after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    margin: 0px;
    padding: 0px;
    vertical-align: baseline;
    outline: none;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img {
    object-fit: contain;
    line-height: 0;
  }

  input {
    caret-color: $c-text-primary;
  }

  a {
    text-decoration: none;
  }

  .is-hidden {
    display: none !important;
  }

  .is-unvisible {
    opacity: 0 !important;
    pointer-events: none !important;
  }

  .is-unclick {
    pointer-events: none !important;
  }
}
//-------- app --------//
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $c-text-primary;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $c-text-primary;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
