<template>
    <div class="page">
        <div class="page-head">
            <Icon @click="backPage" class="back-arrow" name="arrow-left"/>
            <span class="page-title">输入数据</span>
        </div>
        <main>
            <div class="input-data">
                <!--选择检测时间-->
                <Field
                    readonly
                    clickable
                    name="datetimePicker"
                    :value="dateValue"
                    label="时间选择"
                    placeholder="点击选择时间"
                    @click="showPickerDateTime = true"
                />
                <Popup v-model="showPickerDateTime" position="bottom">
                    <DatetimePicker
                        v-model="currentDate"
                        type="datetime"
                        :formatter='formatter'
                        :min-date="minDate"
                        :max-date="maxDate"
                        @confirm="onConfirmDate"
                        @cancel="showPickerDateTime = false"
                    />
                </Popup>

                <Field
                    readonly
                    clickable
                    name="picker"
                    :value="typeValle"
                    label="检测类型"
                    placeholder="点击选择检测类型"
                    @click="showPickerState = true"
                />
                <Popup v-model="showPickerState" position="bottom">
                    <Picker
                        show-toolbar
                        :columns="columnState"
                        @confirm="onConfirmSate"
                        @cancel="showPickerState = false"
                    />
                </Popup>

                <Field
                    clickable
                    type="number"
                    v-model="numberValue"
                    label="检测数值"
                    placeholder="mmol/L"
                />
                <!--选择检测人员-->
                <Field
                    readonly
                    clickable
                    name="picker"
                    :value="memberValue"
                    label="检测成员"
                    placeholder="点击选择检测家庭成员"
                    @click="showPickerMember = true"
                />
                <Popup v-model="showPickerMember" position="bottom">
                    <Picker
                        show-toolbar
                        :columns="columnsMember"
                        @confirm="onConfirm"
                        @cancel="showPickerMember = false"
                    />
                </Popup>
                <Field
                    clickable
                    v-model="momentValue"
                    label="检测状态"
                    placeholder="午餐前"
                />
            </div>
        </main>
        <Button @click="submit" round block type="info" native-type="submit">提交</Button>
    </div>
</template>

<script>
    import { Icon, Field, Button, Popup, Picker, DatetimePicker } from 'vant'

    export default {
        name: 'InputData',
        props: [],
        components: {
            Icon,
            Field,
            Button,
            Popup,
            Picker,
            DatetimePicker
        },
        data () {
            return {
                dateValue: '',
                typeValle: '',
                numberValue: '',
                memberValue: '',
                momentValue: '',

                columnsMember: ['爸爸', '妈妈', '爷爷', '奶奶', '男性', '女性'],
                showPickerMember: false,

                columnState: ['血糖', '胆固醇', '尿酸'],
                showPickerState: false,

                minDate: new Date(2020, 0, 1),
                maxDate: new Date(2025, 10, 1),
                currentDate: new Date(),
                showPickerDateTime: false
            };
        },
        methods: {
            formatter (type, val) {
                if (type === 'year') {
                    return `${val}年`;
                } else if (type === 'month') {
                    return `${val}月`
                } else if (type === 'day') {
                    return `${val}日`
                } else if (type === 'hour') {
                    return `${val}时`
                } else if (type === 'minute') {
                    return `${val}分`
                }
                return val;
            },
            submit () {
                console.log(this)
            },
            onConfirm (value) {
                this.memberValue = value;
                this.showPickerMember = false;
            },
            onConfirmSate (value) {
                this.typeValle = value;
                this.showPickerState = false;
            },
            onConfirmDate (value) {
                this.dateValue = this.formatDateObj('YYYY-mm-dd HH:MM:SS', value);
                this.showPickerDateTime = false;
            },
            formatDateObj (fmt, date) {
                let ret;
                const opt = {
                    'Y+': date.getFullYear().toString(), // 年
                    'm+': (date.getMonth() + 1).toString(), // 月
                    'd+': date.getDate().toString(), // 日
                    'H+': date.getHours().toString(), // 时
                    'M+': date.getMinutes().toString(), // 分
                    'S+': date.getSeconds().toString() // 秒
                    // 有其他格式化字符需求可以继续添加，必须转化成字符串
                };
                for (const k in opt) {
                    ret = new RegExp('(' + k + ')').exec(fmt);
                    if (ret) {
                        fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')))
                    }
                }

                return fmt;
            },
            backPage () {
                console.log(this.$route)
                this.$router.push({
                    name: this.$route.params.fromPage,
                    params: { title: this.$route.params.title }
                });
            }
        },
        beforeMount () {
            console.log(this.$router)
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../assets/stylus/color.styl"
    .page
        height 100vh
        background-color $bgTheme

        .page-head
            display flex
            align-items center
            width 100%
            background #fff
            font-size 5.2vw
            padding 2vw 0

            .back-arrow
                position absolute
                left 0.5vw
                line-height 1

                i.van-icon
                    vertical-align middle
            .page-title
                width 100vw

        main
            background-color #fff
            border-radius 5vw
            margin 2vw
            padding 10vw 0
</style>
