import { defineComponent } from "@vue/composition-api";
import { endingSlashRE, outboundRE } from "@theme/util/path";

export default defineComponent({
  name: "PageEdit",

  computed: {
    lastUpdated(): string {
      return this.$themeConfig.lastUpdated === false
        ? ""
        : this.$page.lastUpdated || "";
    },

    lastUpdatedText(): string {
      return this.$themeLocaleConfig.lastUpdated || "Last Updated";
    },

    editLink(): string | false {
      /** 是否展示编辑此页链接 */
      const showEditLink =
        (this.$page.frontmatter.editLink as boolean | undefined) ||
        (this.$themeConfig.editLinks !== false &&
          this.$page.frontmatter.editLink !== false);

      const { repo, docsRepo } = this.$site.themeConfig;

      if (showEditLink && (repo || docsRepo) && this.$page.relativePath)
        return this.createEditLink();

      return false;
    },

    editLinkText(): string {
      return this.$themeLocaleConfig.editLinkText || "Edit this page";
    },
  },

  methods: {
    createEditLink(): string {
      const {
        repo = "",
        docsRepo = repo,
        docsDir = "",
        docsBranch = "master",
      } = this.$themeConfig;

      const bitbucket = /bitbucket.org/u;

      if (bitbucket.test(docsRepo))
        return `${docsRepo.replace(endingSlashRE, "")}/src/${docsBranch}/${
          docsDir ? `${docsDir.replace(endingSlashRE, "")}/` : ""
        }${
          this.$page.relativePath
        }?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`;

      const gitlab = /gitlab.com/u;
      if (gitlab.test(docsRepo))
        return `${docsRepo.replace(endingSlashRE, "")}/-/edit/${docsBranch}/${
          docsDir ? `${docsDir.replace(endingSlashRE, "")}/` : ""
        }${this.$page.relativePath}`;

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`;

      return `${base.replace(endingSlashRE, "")}/edit/${docsBranch}/${
        docsDir ? `${docsDir.replace(endingSlashRE, "")}/` : ""
      }${this.$page.relativePath}`;
    },
  },
});
