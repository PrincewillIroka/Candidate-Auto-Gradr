<template>
    <header class="header active-header">
        <img src="../assets/images/logo.png" class="logo" alt="Logo" @click="handleHome"/>
        <nav class="nav">
            <a href="/#discover">Discover</a>
            <a href="/grader">Grade</a>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Header",
    methods:{
        handleHome(){
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    display: flex;
    padding: 5px 15% 10px 5%;
    justify-content: space-between;
    align-items: center;
    z-index: 10;

    .logo{
        height: 60px;
        width: 10%;
        object-fit: contain;
    }

    nav{
        a{
            font-family: 'Oswald', sans-serif;
            font-weight: bold;
            color: $color-common;
            &:hover{
                opacity: 0.7; 
            }
        }

        a:nth-child(2){
            margin-left: 30px;
        }
    }

}

.active-header{
    box-shadow: 0 4px 2px -2px #ccc;
    // box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
}
</style>