import { appSettings } from "./store.svelte";

export let selectedLocale = $state("en");

export let en = $state({
  addBucket: {
    invalidS3Api: "Invalid S3 API format, please refer to help",
    howToUse: "How to use",
    step1:
      "1. Enter S3 API URL in format: https://[accountId].r2.cloudflarestorage.com/[bucketName]",
    step2:
      "2. If you already have Bucket Name and Account ID, you can fill them directly",
    step3: "3. Enter Access Key and Secret Key for authentication",
    step4: "4. Optional: Fill in Custom Domain",
    step5: "5. Click Save to save configuration",
    title: "Add Bucket",
    cancel: "Cancel",
    save: "Save",
    addNew: "Add New Bucket",
    labels: {
      s3Api: "S3 API",
      bucketName: "Bucket Name",
      accountId: "Account ID",
      accessKey: "Access Key",
      secretKey: "Secret Key",
      customDomain: "Custom Domain",
    },
  },
  common: {
    upload: "Upload",
    setting: "Setting",
    loading: "loading...",
    close: "close",
    uploading: "Uploading...",
    delete: "Delete",
    useSystemProxy: "Use system proxy",
    language: "Language",
    selectLanguage: "Select language",
    clipboardReadError: "Failed to read clipboard content",
    uploadError: "Upload failed, please try again",
    noBucketWarning: "Please add a bucket in settings first",
  },
  settings: {
    buckets: "Buckets",
    language: "Language",
    bucketDetails: {
      bucket: "Bucket",
      accountId: "Account ID",
    },
  },
  uploadTargetSelector: {
    title: "Upload Target",
    placeholder: "Select upload target",
  },
  textUploader: {
    textPlaceholder: "Enter text content to upload",
    filenamePlaceholder: "Enter remote filename",
    textSeparator: "Text Content",
    filenameSeparator: "Remote Filename",
  },
  tabSwitcher: {
    file: "Upload File",
    folder: "Upload Folder",
    text: "Upload Text",
    clipboard: "Clipboard",
  },
  fileUploader: {
    previewFailed: "Preview failed",
    uploadSuccess: "Upload successful",
    uploadFailed: "Upload failed, please try again",
    filePreview: "File preview",
    filename: "Filename",
    remotePath: "Remote path",
    bucketReady: "Your bucket is ready",
    dragDrop: "Drag and drop or",
    clickToSelect: "click to select files",
    globalPath: "Global path",
    remotePathPlaceholder: "Remote path",
    filenamePlaceholder: "Remote filename",
  },
  fileDrag: {
    dragHere: "Drag files here",
    releaseToConfirm: "Release to confirm",
  },
  clipboardUploader: {
    refresh: "Refresh clipboard content",
    clipboardText: "Clipboard text",
    clipboardHtml: "Clipboard HTML",
    clipboardImage: "Clipboard image",
    clipboardRtf: "Clipboard RTF",
    clipboardFile: "Clipboard file",
  },
  alert: {
    uploadSuccess: "Upload successful",
    uploadFailed: "Upload failed, please try again",
    getStatusFailed: "Failed to get upload status",
    allFilesUploaded: "All files uploaded",
  },
});

export let zh = $state({
  addBucket: {
    invalidS3Api: "S3 API 格式不正确，请参阅帮助",
    howToUse: "如何使用",
    step1:
      "1. 输入 S3 API URL，格式为：https://[accountId].r2.cloudflarestorage.com/[bucketName]",
    step2: "2. 如果已有 Bucket Name 和 Account ID，可以直接填写",
    step3: "3. 输入 Access Key 和 Secret Key 进行身份验证",
    step4: "4. 可选：填写自定义域名（Custom Domain）",
    step5: "5. 点击 Save 保存配置",
    title: "添加存储桶",
    cancel: "取消",
    save: "保存",
    addNew: "添加新存储桶",
    labels: {
      s3Api: "S3 API",
      bucketName: "Bucket 名称",
      accountId: "Account ID",
      accessKey: "Access Key",
      secretKey: "Secret Key",
      customDomain: "自定义域名",
    },
  },
  common: {
    upload: "上传",
    setting: "设置",
    loading: "加载中...",
    close: "关闭",
    uploading: "上传中...",
    delete: "删除",
    useSystemProxy: "使用系统代理",
    language: "语言",
    selectLanguage: "选择语言",
    clipboardReadError: "读取剪贴板内容失败",
    uploadError: "上传失败，请重试",
    noBucketWarning: "请先在设置中添加存储桶",
  },
  settings: {
    buckets: "存储桶",
    language: "语言",
    bucketDetails: {
      bucket: "存储桶",
      accountId: "账户 ID",
    },
  },
  uploadTargetSelector: {
    title: "上传目标",
    placeholder: "选择上传目标",
  },
  textUploader: {
    textPlaceholder: "输入要上传的文本内容",
    filenamePlaceholder: "输入远程文件名",
    textSeparator: "文本内容",
    filenameSeparator: "远程文件名",
  },
  tabSwitcher: {
    file: "上传文件",
    folder: "上传文件夹",
    text: "上传文本",
    clipboard: "剪贴板",
  },
  fileUploader: {
    previewFailed: "预览失败",
    uploadSuccess: "上传成功",
    uploadFailed: "上传失败，请重试",
    filePreview: "文件预览",
    filename: "文件名",
    remotePath: "远程路径",
    bucketReady: "您的存储桶已就绪",
    dragDrop: "拖放或",
    clickToSelect: "点击选择文件",
    globalPath: "全局路径",
    remotePathPlaceholder: "远程路径",
    filenamePlaceholder: "远程文件名",
  },
  fileDrag: {
    dragHere: "拖动文件到此",
    releaseToConfirm: "松手即可确认",
  },
  clipboardUploader: {
    refresh: "刷新剪贴板内容",
    clipboardText: "剪贴板文本",
    clipboardHtml: "剪贴板 HTML",
    clipboardImage: "剪贴板图片",
    clipboardRtf: "剪贴板 RTF",
    clipboardFile: "剪贴板文件",
  },
  alert: {
    uploadSuccess: "上传成功",
    uploadFailed: "上传失败，请重试",
    getStatusFailed: "获取上传状态失败",
    allFilesUploaded: "所有文件都上传完成",
  },
});

export function t() {
  return appSettings.locale === "en" ? en : zh;
}
