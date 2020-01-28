<template>
    <div class="banner">
        <img src="../assets/svg/undraw_blogging_vpvv.svg" 
            class="banner-img" alt="A person in an office"/>
        <section class="banner-section">
            <h1>Select candidates with ease</h1>
            <h6>Just fill a few details and we grade them instantly.</h6>
            <a href="/grader">Grade Now</a>
        </section>
    </div>
</template>

<script>
export default {
    name: "Banner"
}
</script>

<style lang="scss" scoped>
    .banner{
        height: 400px;
        width: 100%;
        padding: 20px 10px;
        display: flex;

        &-img{
            width: 60%;
            height: 100%;
        }

        &-section{
            width: 40%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            h1{
                font-size: 22px;
                margin-bottom: 10px;
            }

            h6{
                font-size: 15px;
                margin-bottom: 20px;
            }

            a{
                font-size: 17px;
                background-color: $color-common;
                padding: 8px 12px;
                color: $color-white;
                border-radius: 20px;
                opacity: 0.8;
                width: 120px;
                align-items: center;
                justify-content: center;
                display: flex;
                &:hover{
                    opacity: 0.6;
                }
            }
        }
    }
</style>