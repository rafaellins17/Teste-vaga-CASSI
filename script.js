(() => {
  function toggleDropdown(selector) {
    document.querySelectorAll(selector).forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const submenu = link.nextElementSibling
        submenu.classList.toggle('show')
      })
    })
  }

  function toggleMenu(hamburgerId, menuId) {
    const hamburger = document.getElementById(hamburgerId)
    const navMenu = document.getElementById(menuId)
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active')
    })
  }

  function configurarEtapasNip({
    btnNaoId,
    btnSimId,
    titleContainerId,
    buttonContainerId,
    modalFormId,
  }) {
    const btnNao = document.getElementById(btnNaoId)
    const btnSim = document.getElementById(btnSimId)
    const nipTitle = document.getElementById(titleContainerId)
    const nipButtons = document.getElementById(buttonContainerId)
    const modalForm = document.getElementById(modalFormId)

    let respostaInterlocutor = ''

    btnNao.addEventListener('click', () => {
      respostaInterlocutor = ''
      nipTitle.innerHTML = '<strong>Reconhece o interlocutor?</strong><br><br>'
      nipButtons.innerHTML = `
        <button class="btn-outline" data-interlocutor="nao">Não</button>
        <button class="btn-primary" data-interlocutor="sim">Sim</button>
      `
    })

    nipButtons.addEventListener('click', (e) => {
      const target = e.target
      if (
        target.tagName === 'BUTTON' &&
        target.hasAttribute('data-interlocutor')
      ) {
        respostaInterlocutor = target.getAttribute('data-interlocutor')
        modalForm.style.display = 'flex'
      }
    })

    btnSim.addEventListener('click', () => {
      nipTitle.innerHTML = ''
      nipButtons.innerHTML = `
        <div class="alert-box-yes">
          <i class="far fa-check-circle" style="color: #29BB11;"></i>
          <span>Abertura da NIP <strong>RECONHECIDA</strong> pelo usuário.</span>
        </div>
        <br>
        <div class="success-box">
          <i class="fas fa-check-circle"></i>
          <strong>Obrigado pela resposta!</strong>
        </div>
      `
    })

    document.querySelector('#modal-form form').addEventListener('submit', (e) => {
      e.preventDefault()
      modalForm.style.display = 'none'

      let mensagem = ''
      if (respostaInterlocutor === 'nao') {
        mensagem = `
          <div class="alert-box">
            <i class="fas fa-exclamation-circle"></i>
            <span>Interlocutor <strong>NÃO RECONHECIDO</strong> e abertura da NIP <strong>NÃO RECONHECIDA</strong>.</span>
          </div>
        `
      } else {
        mensagem = `
          <div class="alert-box">
            <i class="fas fa-exclamation-circle"></i>
            <span>Interlocutor <strong>RECONHECIDO</strong> e abertura da NIP <strong>NÃO RECONHECIDA</strong>.</span>
          </div>
        `
      }

      nipTitle.innerHTML = ''
      nipButtons.innerHTML = `
        ${mensagem}
        <br>
        <div class="success-box">
          <i class="fas fa-check-circle"></i>
          <strong>Obrigado pela resposta!</strong>
        </div>
      `
    })

    const btnVoltar = document.getElementById('btn-voltar')
    btnVoltar.addEventListener('click', () => {
      modalForm.style.display = 'none'
    })
  }

  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-form')
    modal.style.display = 'none'

    toggleDropdown('.dropdown > a')
    toggleMenu('hamburger-btn', 'nav-menu')
    configurarEtapasNip({
      btnNaoId: 'btn-nao-nip',
      btnSimId: 'btn-sim-nip',
      titleContainerId: 'nip-title',
      buttonContainerId: 'nip-buttons',
      modalFormId: 'modal-form',
    })
  })
})()
