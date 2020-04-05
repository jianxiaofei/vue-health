<template>
    <div class="page page-test-record">
        <div class="user-wrap">
            <img :src="memberInfo.picture">
            <span>{{memberInfo.name}}</span>
        </div>
        <div class="main">
            <nav @click.stop="tabBar">
                <div class="bloodSugar active">血糖</div>
                <div class="cholesterol">胆固醇</div>
                <div class="uricAcid">尿酸</div>
            </nav>
            <div class="table-wrap">
                <table>
                    <tbody>
                    <tr v-for="(val, idx) of testList[testName]" :key="idx">
                        <td class="date">{{val.date}}</td>
                        <td class="foodTime">{{val.foodTime}}</td>
                        <td class="value">{{val.value}}</td>
                        <td :class="'state-'+val.state">{{stateData[val.state]}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TestRecord',
        props: [],
        components: {},
        methods: {
            tabBar () {
                var uniqueIdx = '.page-test-record div.active'
                var prevTab = document.querySelector((uniqueIdx))
                var currTab = arguments[0].target;
                if (currTab.nodeName === 'DIV') {
                    prevTab.classList.remove('active')
                    currTab.classList.add('active')
                    this.testName = currTab.classList[0];
                }
            }
        },
        data () {
            return {
                stateData: ['正常', '低', '偏高', '高'],
                memberInfo: { type: Object },
                testName: 'bloodSugar',
                testList: {
                    bloodSugar: [],
                    cholesterol: [],
                    uricAcid: []
                }
            }
        },
        beforeMount () {
            this.memberInfo = JSON.parse(sessionStorage.getItem('memberInfo'))
            var foodState = ['早餐前', '早餐后', '午餐前', '午餐后', '晚餐前', '晚餐后']
            for (let i = 20; i--;) {
                var randVal = (Math.random() * 200).toFixed(3);
                var state = randVal < 20 ? 1 : randVal < 50 ? 0 : randVal < 100 ? 2 : 3
                this.testList.bloodSugar.push({
                    date: new Date().toLocaleTimeString(),
                    foodTime: foodState[parseInt(Math.random() * foodState.length)],
                    value: randVal + 'mmol/L',
                    state: state
                })

                randVal = (Math.random() * 200).toFixed(3);
                state = randVal < 20 ? 1 : randVal < 50 ? 0 : randVal < 100 ? 2 : 3
                this.testList.cholesterol.push({
                    date: new Date().toLocaleTimeString(),
                    foodTime: foodState[parseInt(Math.random() * foodState.length)],
                    value: randVal + 'mmol/L',
                    state: state
                })

                randVal = (Math.random() * 200).toFixed(3);
                state = randVal < 20 ? 1 : randVal < 50 ? 0 : randVal < 100 ? 2 : 3
                this.testList.uricAcid.push({
                    date: new Date().toLocaleTimeString(),
                    foodTime: foodState[parseInt(Math.random() * foodState.length)],
                    value: randVal + 'mmol/L',
                    state: state
                })
            }
            console.log(this.testList)
        }
    }
</script>

<style lang="stylus" scoped>
    .user-wrap
        display flex
        justify-content left
        align-items center
        padding 6vh 0 6vh 6vw

        img
            width 22vw
            height 12vh
            border-radius 50%

        span
            margin-left 6vw
            font-size 5vw

    .main
        background-color #fff
        padding 1.5vh 0

        nav
            display flex
            justify-content left
            padding 0 3vw

            div
                margin 0 6vw
                font-size 5vw
                padding 1vh 1vw 0.2vw 1vw
                text-align center

                &.active
                    border-bottom .5vw solid #3862cc
                    color #3862cc

        .table-wrap
            overflow-y scroll
            max-height 60vh
            padding 0 2vw

            table
                margin 0 auto

                tr:nth-child(even)
                    background-color rgba(220, 220, 220, 0.32)

                td
                    padding 1.5vh 2.5vw

                    &.state-1
                        color #09d4e8

                    &.state-2
                        color #fec20b

                    &.state-3
                        color #ff0000

</style>
