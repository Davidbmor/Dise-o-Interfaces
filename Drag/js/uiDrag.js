export const uiDrag = {
    init: (selector1, selector2) => {
        let elementoSeleccionado = null;

        const handleDrop = (e, father, styles) => {
            e.preventDefault();
            if (elementoSeleccionado) {
                const rect = father.getBoundingClientRect();
                const offsetX = e.clientX - rect.left;
                const offsetY = e.clientY - rect.top;

                elementoSeleccionado.style.position = "absolute";
                elementoSeleccionado.style.left = `${offsetX - elementoSeleccionado.offsetWidth / 2}px`;
                elementoSeleccionado.style.top = `${offsetY - elementoSeleccionado.offsetHeight / 2}px`;

                Object.assign(elementoSeleccionado.style, styles);

             
                father.appendChild(elementoSeleccionado);

                elementoSeleccionado = null; 
            }
        };
        const father1 = document.getElementById(selector1);
        father1.addEventListener("dragover", (e) => e.preventDefault());
        father1.addEventListener("drop", (e) => {
            handleDrop(e, father1, { backgroundColor: "blue", color: "white" });
        });
        const father2 = document.getElementById(selector2);
        father2.addEventListener("dragover", (e) => e.preventDefault());
        father2.addEventListener("drop", (e) => {
            handleDrop(e, father2, { backgroundColor: "green", color: "black" });
        });

        const divs = document.querySelectorAll(`#${selector1} .elemento, #${selector2} .elemento`);
        divs.forEach((div) => {
            div.setAttribute("draggable", "true");
            div.addEventListener("dragstart", (e) => {
                elementoSeleccionado = e.target;
                console.log("Elemento seleccionado:", elementoSeleccionado);
            });
        });
    },
};
