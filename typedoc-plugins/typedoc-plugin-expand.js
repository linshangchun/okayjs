import { RendererEvent } from 'typedoc';

/**
 * Typedoc 插件：自动展开导航中的所有 collapsed 分组
 * 使用 hooks 注入脚本到文档 HTML <head> 中
 * @see https://typedoc.org/guides/plugins/
 */

export function load(app) {
  // app.renderer.hooks.on('head.end', () => {
  //   return `
  //   <script>
  //     window.addEventListener('DOMContentLoaded', () => {
  //       const collapsedItems = document.querySelectorAll('.tsd-navigation .tsd-kind-group.collapsed');
  //       collapsedItems.forEach(item => item.classList.remove('collapsed'));
  //     });
  //   </script>
  //   `;
  // });

  // // Optional: log plugin loaded
  // app.logger.info('[typedoc-plugin-expand] Loaded');
  app.renderer.on(RendererEvent.BEGIN_PAGE, page => {
    const script = `
      <script>
      window.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.tsd-navigation .tsd-kind-group.collapsed')
          .forEach(el => el.classList.remove('collapsed'));
      });
      </script>
    `;
    // 安全地插入到页面 <head> 标签末尾
    page.contents = page.contents.replace('</head>', `${script}\n</head>`);
  });

  app.logger.info('[typedoc-plugin-expand] 脚本已正确注入到页面 head 中');
}
