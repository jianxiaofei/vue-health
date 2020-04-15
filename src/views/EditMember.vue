<template>
    <div class="page">
        <page-head :title="(memberData?'编辑':'添加')+'家庭成员信息'" back-page-name="MemberManage">
            <span v-if="memberData" @click="saveEdit" class="save-member">保存</span>
        </page-head>
        <main>
            <Form validate-first @failed="onFailed">
                <!--头像-->
                <Field name="uploader" label="头像">
                    <template #input>
                        <Uploader
                            v-model="uploader"
                            :max-count="2"
                            pload-icon="上传"/>
                    </template>
                </Field>
                <!--成员-->
                <Field
                    clearable
                    label="成员"
                    is-link
                    v-model="memberName"
                    name="asyncValidator"
                    placeholder="输入成员"
                    input-align="right"
                    error-message-align="right"
                    :rules="[{ validator: asyncValidatorMember, message: '请输入正确内容' }]"/>
                <!--年龄-->
                <Field
                    v-model="digitAge"
                    clearable
                    is-link
                    input-align="right"
                    type="number"
                    placeholder="输入年龄 /岁"
                    label="年龄/岁"/>
                <!--身高-->
                <Field
                    v-model="digitHeight"
                    clearable
                    is-link
                    input-align="right"
                    type="number"
                    placeholder="输入身高 /cm"
                    label="身高/cm"/>
                <!--体重-->
                <Field
                    v-model="digitWeight"
                    clearable
                    is-link
                    input-align="right"
                    label-align="left"
                    type="number"
                    placeholder="输入体重 /kg"
                    label="体重/kg"/>
            </Form>
            <div v-if="memberData" @click="delMember" class="button">删除档案</div>
            <div v-else @click="saveEdit" class="submit">提交</div>
        </main>
    </div>
</template>

<script>
    import { Uploader, Field, Form } from 'vant'
    import pageHead from '@c/common/Head'

    export default {
        name: 'EditMember',
        props: [],
        components: {
            pageHead,
            Uploader,
            Field,
            Form
        },
        data () {
            return {
                memberData: null,
                uploader: [],
                memberName: '',
                digitAge: '',
                digitHeight: '',
                digitWeight: '',
                isEdit: true
            }
        },
        methods: {
            delMember () {
                const that = this;
                const proms = new Promise(function (resolve, reject) {
                    that.uploader = [];
                    that.memberData = null;
                    that.memberName = ''
                    that.digitAge = ''
                    that.digitHeight = ''
                    that.digitWeight = ''
                    resolve('ok!')
                })

                proms.then(function () {
                    that.$toast('删除成功！')
                })
            },
            asyncValidatorMember (val) {
                return /\d(kg)$/g.test(val); // TODO 测试
            },
            asyncValidatorAge (val) {
                return /\d(kg)$/g.test(val);
            },
            afterRead (file) {
                // 此时可以自行将文件上传至服务器
                console.log(file);
            },
            saveEdit () {
            },
            onFailed (errorInfo) {
                console.log('failed', errorInfo);
            }
        },
        beforeMount () {
            console.log(this.$route)
            this.memberData = this.$route.params.memberData
            if (this.memberData) {
                this.uploader.unshift({
                    url: this.memberData.picture,
                    isImage: true
                })
                this.memberName = this.memberData.name;
                this.digitAge = `${this.memberData.age}岁`;
                this.digitHeight = `${this.memberData.height}/cm`
                this.digitWeight = `${this.memberData.weight}/kg`
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@stylus/color.styl"
    .page
        height 100vh
        background-color $bgTheme

        .save-member
            position: absolute;
            right 3vw
            word-break keep-all
            font-size 4.5vw

        main
            form
                background-color #fff
                border-radius 4vw
                margin 1vw 3vw
                padding 1vw

                .van-cell
                    align-items center
                    justify-content left

            /*text-align left*/

            div.button, div.submit
                border 1px solid
                border-radius 10vw
                margin 5vw 3vw
                padding 2vw 0
                background-color #fff
                border-color #fff
                color red

                &.submit
                    color blue
                    border-color blue

                &:hover
                    background-color rgba(0, 255, 255, 0.2)

</style>
