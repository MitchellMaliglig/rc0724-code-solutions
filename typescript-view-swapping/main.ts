/*

let $html = document.querySelector('div.tab-container>div[data-view="html"]') as HTMLDivElement;
let $htmlInfo = document.querySelector('div.view-container>div[data-view="html"]') as HTMLDivElement;

let $css = document.querySelector('div.tab-container>div[data-view="css"]') as HTMLDivElement;
let $cssInfo = document.querySelector('div.view-container>div[data-view="css"]') as HTMLDivElement;

let $javascript = document.querySelector('div.tab-container>div[data-view="javascript"]') as HTMLDivElement;
let $javascriptInfo = document.querySelector('div.view-container>div[data-view="javascript"]') as HTMLDivElement;

if (!$html) throw new Error('$html missing');
if (!$htmlInfo) throw new Error('$htmlInfo missing');
if (!$css) throw new Error('$css missing');
if (!$cssInfo) throw new Error('$cssInfo missing');
if (!$javascript) throw new Error('$javascript missing');
if (!$javascriptInfo) throw new Error('$javascriptInfo missing');

$html.addEventListener('click', function(){
  $html.className = 'tab active';
  $css.className = 'tab';
  $javascript.className = 'tab';

  $htmlInfo.className = 'view';
  $cssInfo.className = 'view hidden';
  $javascriptInfo.className = 'view hidden';
})

$css.addEventListener('click', function () {
  $html.className = 'tab';
  $css.className = 'tab active';
  $javascript.className = 'tab';

  $htmlInfo.className = 'view hidden';
  $cssInfo.className = 'view';
  $javascriptInfo.className = 'view hidden';
});

$javascript.addEventListener('click', function () {
  $html.className = 'tab';
  $css.className = 'tab';
  $javascript.className = 'tab active';

  $htmlInfo.className = 'view hidden';
  $cssInfo.className = 'view hidden';
  $javascriptInfo.className = 'view';
});

*/

const $tabContainer = document.querySelector(
  'div.tab-container'
) as HTMLDivElement;
if (!$tabContainer) throw new Error('$tabContainer missing');
const $tabs = $tabContainer.children;
console.log('$tabs', $tabs);

const $viewContainer = document.querySelector(
  'div.view-container'
) as HTMLDivElement;
if (!$viewContainer) throw new Error('$tabContainer missing');
const $views = $viewContainer.children;
console.log('$views', $views);

$tabContainer.addEventListener('click', function (e: Event) {
  const $eventTarget = e.target as HTMLDivElement;
  const $view = $eventTarget.dataset.view;

  if ($eventTarget.matches('.tab')) {
    for (let i = 0; i < $tabs.length; i++) {
      if ($tabs[i] === $eventTarget) {
        $tabs[i].className = 'tab active';
      } else {
        $tabs[i].className = 'tab';
      }
    }

    for (let i = 0; i < $views.length; i++) {
      console.log($views[i].getAttribute('data-view') + ' ' + $view);
      if ($views[i].getAttribute('data-view') === $view) {
        $views[i].className = 'view';
      } else {
        $views[i].className = 'view hidden';
      }
    }
  }
});
