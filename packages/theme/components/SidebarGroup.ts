import { PropType, defineComponent } from "@vue/composition-api";
import { isActive } from "@theme/util/path";

import DropdownTransition from "@theme/components/DropdownTransition.vue";

import { SidebarAutoItem, SidebarGroupItem } from "@theme/util/sidebar";

export default defineComponent({
  name: "SidebarGroup",

  components: { DropdownTransition },

  props: {
    item: {
      type: Object as PropType<SidebarAutoItem | SidebarGroupItem>,
      required: true,
    },

    open: { type: Boolean, default: false },

    depth: { type: Number, default: 0 },
  },

  setup() {
    return { isActive };
  },

  beforeCreate(): void {
    // eslint-disable-next-line
    this.$options.components!.SidebarLinks = require("@theme/components/SidebarLinks.vue").default;
  },

  methods: {
    getIcon(icon: string | undefined): string {
      const { iconPrefix } = this.$themeConfig;

      return this.$themeConfig.sidebarIcon !== false && icon
        ? `${iconPrefix === "" ? "" : iconPrefix || "icon-"}${icon}`
        : "";
    },
  },
});
