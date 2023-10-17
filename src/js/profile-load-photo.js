

const init = () => {
  document.addEventListener('change', function onChangePhoto(event) {
    if (event.target.getAttribute('data-input-file') == null) return
    addFiles(event.target, event.target.files)
  });

  function addFiles(input, fileList) {
    if (fileList.length > 0 && input.getAttribute('data-preview') != null) {
      const target = document.getElementById(input.getAttribute('data-preview'))
      const error = document.getElementById(input.getAttribute('data-error'))
      const accept = input.getAttribute('data-accept')
      const max = +input.getAttribute('data-max')

      if (fileList[0].type.indexOf(accept) == -1) {
        error.textContent = 'Неправильный тип файла'
        return
      }

      if (max && fileList[0].size > max) {
        error.textContent = 'Неправильный размер файла'
        return
      }

      error.textContent = ''
      target.src = URL.createObjectURL(fileList[0]);
      URL.revokeObjectURL(fileList[0]);

      if (target.closest('[data-target-wrap]')) {
        target.closest('[data-target-wrap]').style.display = 'block'
      }
    }
  }
  
  document.addEventListener('dragleave', (event) => {
    event.preventDefault()
  
    if (event.target.closest('[data-input-dropable]') && event.relatedTarget && !event.relatedTarget.closest('[data-input-dropable]')) {
      event.target.closest('[data-input-dropable]').classList.remove('hovered');
    }
  
    if (event.target.closest('html') && !event.relatedTarget) {
      const fields = [...document.querySelectorAll('[data-input-dropable]')];
      fields.map((field) => field.classList.remove('waiting'));
    }
  
  
  
  })
  
  document.addEventListener('dragenter', (event) => {
    event.preventDefault();
    const fields = [...document.querySelectorAll('[data-input-dropable]')];
    fields.map((field) => field.classList.add('waiting'));
  
    if (event.target.closest('[data-input-dropable]')) {
      event.target.closest('[data-input-dropable]').classList.add('hovered');
    }
  });
  
  document.addEventListener('dragexit', (event) => {
    event.preventDefault()
  });
  
  document.addEventListener('dragover', (event) => {
    event.preventDefault()
  });
  
  document.addEventListener('drop', (event) => {
    event.preventDefault()
  
    const fields = [...document.querySelectorAll('[data-input-dropable]')];
    fields.map((field) => {
      field.classList.remove('hovered');
      field.classList.remove('waiting');
    });
  
    const field = event.target.closest('[data-input-dropable]');
    if (!field) return;
  
  
    if (event.target.closest('[data-input-dropable]') && event.target.closest('[data-input-dropable]').querySelector('[data-input-file]')) {
      const input = event.target.closest('[data-input-dropable]').querySelector('[data-input-file]')
      addFiles(input, event.dataTransfer.files);
      field.classList.add('active');
      return;
  
    }
  });
  
  
  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-remove-src]')) {
      const id = event.target.closest('[data-remove-src]').getAttribute('data-remove-src')
      document.getElementById(id).src = ''
  
      if (document.getElementById(id).closest('[data-target-wrap]')) {
        document.getElementById(id).closest('[data-target-wrap]').style.display = 'none'
      }
    }
  })
}

export default { init }