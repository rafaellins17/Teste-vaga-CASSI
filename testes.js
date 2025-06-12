window.addEventListener("DOMContentLoaded", () => {
  const btnNao = document.getElementById("btn-nao-nip");
  const btnSim = document.getElementById("btn-sim-nip");
  const nipButtons = document.getElementById("nip-buttons");

  if (btnNao) {
    btnNao.addEventListener("click", () => {
      console.log("🟥 Clique em 'Não reconheço'");
    });
  }

  if (btnSim) {
    btnSim.addEventListener("click", () => {
      console.log("🟩 Clique em 'Sim, foi aberto por mim'");
    });
  }

  nipButtons?.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "BUTTON" && target.hasAttribute("data-interlocutor")) {
      const resposta = target.getAttribute("data-interlocutor");
      console.log(`🔵 Clique em botão do interlocutor: ${resposta}`);
    }
  });
});
