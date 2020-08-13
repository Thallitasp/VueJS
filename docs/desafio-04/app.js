new Vue({
	el: '#desafio',
	data: {
		desafio01: 'destaque',
		campo: true,
		desafio03: '',
		desafio04: '',
		cor05: '',
		estilo05: {
			width: '100px',
			height: '100px'
		},
		width: '0'
	},

	method: {
		iniciarEfeito() {
			setInterval(() => {
				this.desafio01 = this.desafio01 == 'destaque' 
					? 'encolher' : 'destaque'
			}, 2000)
		},

		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(()=> {
				valor += 5
				this.width = `${valor}%`
				if(valor == 100){
					clearInterval(temporizador)
				}
			}, 500)
		},

		setCampo(event){
			if(event.target.value == "true"){
				this.campo = true
			} else{
				this.campo = false
			}
		}

	}
})
