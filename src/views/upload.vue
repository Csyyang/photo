<template>
  <div id="upload">
    <div style="height: 44px;">
      <mheader title="上传"></mheader>
    </div>
    <div class="content">
      <el-upload class="upload-demo" ref="upload" :http-request="startUpload" action="#" :auto-upload="false" :with-credentials="true" :file-list="fileList" list-type="picture">
        <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传图片文件</div>
      </el-upload>
    </div>
  </div>
</template>

<script>
import mheader from '../components/header.vue'
export default {
  components: {
    mheader
  },
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    startUpload(parm) {
      // window.console.log(parm)
      let _this = this;
      let file = parm.file;
      let fileTyep = file.type;
      let isImage = fileTyep.indexOf('image') != -1;
      if (!isImage) {
        console.log("请上传图片")
      }
      this.uploadFile(file);
    },
    async uploadFile(file) {
      let parms = new FormData();
      parms.append("file", file);
      this.$axios2.defaults.headers.post['Content-Type'] = 'multipart/form-data;charse=UTF-8';
      var res = await this.$axios('/api/upLoadImg', parms);
      this.fileList.push(res.data.message);
    }
  }
}
</script>


<style lang="scss">
#upload {
  background: #fff;
  .content {
    padding: 12px 20px;
    //   display: flex;
    //   justify-content: space-around;
  }
}
</style>