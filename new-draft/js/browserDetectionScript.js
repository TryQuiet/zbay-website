var linkButton = document.getElementById('zb-autodetect-platform');
var firstBox = document.getElementById('zb-first-box');
var secondBox = document.getElementById('zb-second-box');
var firstOtherLink = document.getElementById('zb-first-other-target-link');
var secondOtherLink = document.getElementById('zb-second-other-target-link');

const setAttributes = (version) => {
  if (version === 'mac') {
    linkButton.classList.add('zb-hero-button-mac');
  }
  const versions = ['windows', 'mac', 'linux']
  const downloadText = {
    windows: 'Download for Windows',
    linux: 'Download for Linux',
    mac: 'Download for Mac'
  }
  const downloadTextOther = {
    windows: 'Windows?',
    linux: 'Linux?',
    mac: 'Mac?'
  }
  var links = {
    windows: 'https://s3.amazonaws.com/release.zbay.app/Zbay+Setup+1.0.67-dev-windows-2.exe',
    linux: 'https://s3.amazonaws.com/release.zbay.app/Zbay-1.0.67-dev-linux-18-2.AppImage',
    mac: 'https://s3.amazonaws.com/release.zbay.app/Zbay-1.0.67-dev-mac-2.dmg'
  };
  var primaryButtonText = downloadText[version];
  var indexToRemove = versions.indexOf(version);
  versions.splice(indexToRemove, 1);
  var firstOtherText = downloadTextOther[versions[0]];
  var secondOtherText = downloadTextOther[versions[1]];
  var firstOtherLinkDesc = downloadText[versions[0]];
  var secondOtherLinkDesc = downloadText[versions[1]];
  var primaryButtonLink = links[version];
  var firstOtherLinkText = links[versions[0]];
  var secondOtherLinkText = links[versions[1]];
  linkButton.innerText = primaryButtonText;
  firstBox.innerText = firstOtherText;
  secondBox.innerText = secondOtherText;
  firstOtherLink.innerText = firstOtherLinkDesc;
  secondOtherLink.innerText = secondOtherLinkDesc;
  linkButton.setAttribute('href', primaryButtonLink);
  firstOtherLink.setAttribute('href', firstOtherLinkText);
  secondOtherLink.setAttribute('href', secondOtherLinkText);
}

if (navigator.appVersion.indexOf('Win') !== -1) {
  setAttributes('windows')
} else if (navigator.appVersion.indexOf('Mac') !== -1) {
  setAttributes('mac')
} else if (navigator.appVersion.indexOf('Linux') !== -1) {
  setAttributes('linux')
} else {
  setAttributes('mac')
}
