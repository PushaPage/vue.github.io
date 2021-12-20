<template>
    <section :style="{ background: 'rgb(100, 210, 255)' }" class="flex-fill">
        <div class="container pt-5">
            <h1>About page</h1>
            <div class="mt-5">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quis eligendi. Rem atque ab, numquam
                    a repellendus commodi aspernatur iure libero veniam dolor iste sint laborum exercitationem? Eveniet
                    maiores quos dolore fuga pariatur rerum sequi, dolorem ab qui vero, architecto hic eius repellat.
                    Accusamus possimus corrupti soluta in sed a eveniet rem fugiat facilis? Ullam dolorum tenetur
                    dignissimos praesentium fuga id eum dolores optio laboriosam. Dicta incidunt veniam omnis nobis
                    quasi doloribus iure. Fugiat repudiandae sed nihil odit.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam qui consectetur necessitatibus
                    voluptatum ab deserunt, enim velit, molestias rerum praesentium nesciunt ad natus illum? Modi,
                    aspernatur quaerat, debitis delectus quis repudiandae et deleniti eaque rerum odio suscipit.
                    Perspiciatis sequi ab impedit qui esse assumenda libero tempora nesciunt. Esse vero, rem perferendis
                    porro modi sint optio similique, minus ex tenetur blanditiis vel aliquam eveniet. Hic ex placeat
                    quia odio laudantium impedit!
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, doloremque magni? Rem laborum
                    quibusdam, quam, velit porro provident quas iste voluptatibus asperiores nihil reprehenderit!
                    Commodi, temporibus ipsa quaerat repudiandae deleniti, necessitatibus quod natus aut, nemo voluptas
                    exercitationem dolore praesentium corporis at ut dicta eveniet quasi inventore laudantium possimus!
                    Cum consequatur, minima tempore illum totam consectetur fugiat repudiandae voluptate ipsa! Cum odit
                    iure nam laudantium, esse veniam tempora. Voluptas doloremque rerum commodi, excepturi assumenda
                    provident, molestiae dolorum illum aspernatur dignissimos ut vel eaque saepe neque quo libero fugiat
                    est quibusdam modi veniam sapiente obcaecati sed. Et earum ab architecto consequuntur aspernatur
                    eveniet sapiente eaque.
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    // NOTE: call middleware from left to right
    middleware: ['auth'],
}
</script>
