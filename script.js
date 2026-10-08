(() => {
    const numberInput = document.getElementById("number");
    const namesInput = document.getElementById("names");
    const quantityInput = document.getElementById("quantity");
    const participantsCount = document.getElementById("participantsCount");
    const numberMode = document.getElementById("numberMode");
    const nameMode = document.getElementById("nameMode");
    const numberPanel = document.getElementById("numberPanel");
    const namePanel = document.getElementById("namePanel");
    const modeTitle = document.getElementById("modeTitle");
    const drawButton = document.getElementById("drawButton");
    const drawButtonText = document.getElementById("drawButtonText");
    const againButton = document.getElementById("againButton");
    const modal = document.getElementById("modal");
    const closeButton = document.getElementById("closeModal");
    const resultsList = document.getElementById("resultsList");
    const resultTitle = document.getElementById("resultTitle");
    const winnerPlural = document.getElementById("winnerPlural");
    const errorMessage = document.getElementById("errorMessage");
    let mode = "number";
    let isDrawing = false;

    function setError(message = "") {
        errorMessage.textContent = message;
    }

    function setMode(nextMode) {
        mode = nextMode;
        const isNumber = mode === "number";
        numberMode.classList.toggle("active", isNumber);
        nameMode.classList.toggle("active", !isNumber);
        numberMode.setAttribute("aria-selected", String(isNumber));
        nameMode.setAttribute("aria-selected", String(!isNumber));
        numberPanel.classList.toggle("hidden", !isNumber);
        namePanel.classList.toggle("hidden", isNumber);
        numberPanel.setAttribute("aria-hidden", String(!isNumber));
        namePanel.setAttribute("aria-hidden", String(isNumber));
        modeTitle.textContent = isNumber ? "Sorteio por números" : "Sorteio por nomes";
        drawButtonText.textContent = isNumber ? "SORTEAR NÚMERO" : "SORTEAR VENCEDOR";
        setError();
        if (!isNumber) updateParticipants();
    }

    function parseNames() {
        return namesInput.value
            .split(/[\n,;]+/)
            .map(name => name.trim())
            .filter(Boolean)
            .filter((name, index, list) => list.indexOf(name) === index);
    }

    function updateParticipants() {
        const names = parseNames();
        participantsCount.textContent = names.length;
        const max = Math.max(names.length, 1);
        quantityInput.max = String(max);
        if (Number(quantityInput.value) > names.length && names.length > 0) quantityInput.value = names.length;
        if (names.length === 0) quantityInput.value = "1";
    }

    function getNumberWinners() {
        const value = Number.parseInt(numberInput.value, 10);
        if (!Number.isInteger(value) || value < 1) {
            setError("Informe um número inteiro maior ou igual a 1.");
            numberInput.focus();
            return null;
        }
        return [Math.floor(Math.random() * value) + 1];
    }

    function getNameWinners() {
        const names = parseNames();
        if (names.length < 1) {
            setError("Adicione pelo menos um participante para realizar o sorteio.");
            namesInput.focus();
            return null;
        }

        const quantity = Number.parseInt(quantityInput.value, 10);
        if (!Number.isInteger(quantity) || quantity < 1) {
            setError("Informe uma quantidade de vencedores válida.");
            quantityInput.focus();
            return null;
        }
        if (quantity > names.length) {
            setError(`Você adicionou ${names.length} participante(s). A quantidade de vencedores não pode passar disso.`);
            quantityInput.focus();
            return null;
        }

        const shuffled = [...names];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled.slice(0, quantity);
    }

    function openModal() {
        modal.className = "modalOpen";
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-active");
    }

    function closeModal() {
        modal.className = "modalClosed";
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-active");
        isDrawing = false;
        drawButton.disabled = false;
        againButton.disabled = false;
    }

    function showResults(values) {
        resultsList.innerHTML = "";
        resultsList.className = "results-list loading";
        winnerPlural.textContent = values.length > 1 ? "ES DEFINIDOS" : " DEFINIDO";
        resultTitle.textContent = values.length > 1 ? `${values.length} vencedores foram sorteados` : "O vencedor da arena foi";

        values.forEach((value, index) => {
            const item = document.createElement("div");
            item.className = "winner-item";
            item.innerHTML = `<span class="winner-position">${index + 1}º</span><strong></strong>`;
            item.querySelector("strong").textContent = value;
            resultsList.appendChild(item);
        });

        window.setTimeout(() => {
            resultsList.classList.remove("loading");
            resultsList.querySelectorAll(".winner-item").forEach((item, index) => {
                item.style.animationDelay = `${index * 90}ms`;
                item.classList.add("winner-reveal");
            });
            isDrawing = false;
            drawButton.disabled = false;
            againButton.disabled = false;
        }, 550);
    }

    function drawWinner() {
        if (isDrawing) return;
        setError();
        const winners = mode === "number" ? getNumberWinners() : getNameWinners();
        if (!winners) return;

        isDrawing = true;
        drawButton.disabled = true;
        againButton.disabled = true;
        openModal();
        showResults(winners);
    }

    numberMode.addEventListener("click", () => setMode("number"));
    nameMode.addEventListener("click", () => setMode("name"));
    drawButton.addEventListener("click", drawWinner);
    againButton.addEventListener("click", drawWinner);
    closeButton.addEventListener("click", closeModal);
    modal.addEventListener("click", event => {
        if (event.target.matches("[data-close-modal]")) closeModal();
    });

    namesInput.addEventListener("input", () => {
        updateParticipants();
        setError();
    });
    quantityInput.addEventListener("input", () => setError());
    numberInput.addEventListener("input", () => setError());

    [numberInput, namesInput, quantityInput].forEach(input => {
        input.addEventListener("keydown", event => {
            if (event.key === "Escape" && modal.className === "modalOpen") closeModal();
            if (event.key === "Enter" && input !== namesInput && !event.shiftKey) drawWinner();
        });
    });

    window.addEventListener("keydown", event => {
        if (event.key === "Escape" && modal.className === "modalOpen") closeModal();
    });

    updateParticipants();
})();
