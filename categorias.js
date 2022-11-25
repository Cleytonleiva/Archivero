const categorias = () => {
    const templateCategorias =
    <main class= 'categorias'>
        <h1>CATEGORÍAS</h1>
        <button class='familia'>FAMILIA</button>
        <button class='amor'>AMOR</button>
        <button class='cuerpo'>CUERPO</button>
        <button class='miedo'>MIEDO</button>
        <button class='actosentido'>ACTOSENTIDO</button>
        <button class='libertad'>LIBERTAD</button>
        <footer>
            <button>FORMA DE NAVEGACIÓN</button>
            <button>RETRIBUCCIÓN</button>
            <button>CRÉDITOS</button>
        </footer>
    </main>
     const categoriaContainer = document.createElement('div');
     categoriaContainer.className = 'categorias-container';
     categoriaContainer.innerHTML = templateCategorias;
}

export default categorias;