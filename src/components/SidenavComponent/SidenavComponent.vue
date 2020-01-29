<template>
  <transition :name="side">
    <div
      v-if="opened"
      id="sidenav"
      class="sidenav"
      :class="getClasses"
      :style="getStyles"
    >
      <slot></slot>
      <div v-if="side == 'right'" class="minimize right" @click="closeSidenav">
        <img
          src="http://cdn.consinco.com.br/fivestyle/icons/arrow_vertical_menu.svg"
          class="arrow-icon"
        />
      </div>
      <div
        v-if="side == 'bottom'"
        class="minimize bottom"
        @click="closeSidenav"
      >
        <img
          src="http://cdn.consinco.com.br/fivestyle/icons/arrow_vertical_menu.svg"
          class="arrow-icon"
        />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "SidenavComponent",
  props: {
    opened: { type: Boolean, default: false },
    side: { type: String, default: "bottom" },
    size: { type: String, default: "30%" },
    autoClose: { type: Boolean, default: false }
  },
  data() {
    return {};
  },
  methods: {
    openSidenav() {
      this.$emit("eventOpened", true);
    },
    closeSidenav() {
      this.$emit("eventOpened", false);
    }
  },
  computed: {
    getStyles() {
      // Verifica a posição do sidenav e define se ele receberá uma altura ou largura no Style
      if (this.side === "bottom") {
        return { height: this.size };
      } else if (this.side === "right") {
        return { width: this.size };
      } else {
        return alert("Variáveis 'size' ou 'side' com entradas incorretas");
      }
    },
    getClasses() {
      let side, open;
      // Verifica se é válido o lado e adiciona em uma variável
      if (this.side === "right" || this.side === "bottom") {
        side = "sidenav-" + this.side;
      } else {
        return alert("O atributo side está incorreto");
      }
      // Adiciona a classe opened a uma variável caso ele esteja fechado
      if (this.opened) {
        open = "opened";
      } else {
        open = "";
      }
      // Retorna uma string com as classes a serem inseridas
      return side + " " + open;
    }
  }
};
</script>

<style lang="scss" scoped>
.sidenav {
  background-color: #fff;
  overflow: auto;
  position: fixed;
  z-index: 20;
  -moz-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;

  &.sidenav-bottom {
    padding: 35px 15px 15px 35px;
    left: 0;
    width: 100%;
  }

  &.sidenav-right {
    border-top: 2px solid #2980b9;
    padding: 15px 15px 15px 35px;
    top: 0;
    bottom: 0;
  }

  &.opened {
    display: initial;
    &.sidenav-bottom {
      bottom: 0;
      left: 0;
      box-shadow: 0 -3px 10px 0 rgba(0, 0, 0, 0.22);
    }
    &.sidenav-right {
      right: 0;
      top: 0;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.22);
    }
  }

  .minimize {
    z-index: 21;
    background: #edeeef;
    position: absolute;
    cursor: pointer;

    &.right {
      top: -1px;
      left: 0;
      width: 20px;
      height: 100%;
      .arrow-icon {
        position: relative;
        top: calc(50% - 6px);
        left: calc(50% - 8px);
      }
    }

    &.bottom {
      top: 0;
      left: 0;
      width: 100%;
      height: 20px;
      .arrow-icon {
        position: relative;
        transform: rotate(90deg);
        top: calc(50% - 8px);
        left: calc(50% - 8px);
      }
    }
  }
}

.sidenav-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.right-enter-active {
  animation: slideInRight 250ms;
}
.right-leave-active {
  animation: slideInRight 250ms reverse;
}
.right-enter,
.right-leave-to {
  right: -100%;
}
.right-enter-active,
.right-leave-active {
  transition: ease-out;
}

@-webkit-keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.bottom-enter-active {
  animation: slideInUp 250ms;
}
.bottom-leave-active {
  animation: slideInUp 250ms reverse;
}
.bottom-enter,
.bottom-leave-to {
  bottom: -100%;
}
.bottom-enter-active,
.bottom-leave-active {
  transition: ease-out;
}

@-webkit-keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
</style>
