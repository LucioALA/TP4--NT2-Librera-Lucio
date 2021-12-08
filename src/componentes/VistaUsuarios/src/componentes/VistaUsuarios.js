

export default {
  name: 'src-componentes-formulario-av',
  components: {},
  props: [],
  data () {
    return {
       url: 'https://6198adf1164fa60017c2317b.mockapi.io/UsuariosIngresados',
      usuarios: [],
      formData : this.getInicialData(),
      formState : {},
      nombreLargoMin : 5,
      nombreLargoMax: 15,
      edadMin : 18,
      edadMax : 120,
      usuariosIngresados:[],
      vacio:false
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    
    getInicialData() {
      return {
        nombre : '',
        edad : '',
        email: ''
      }
    },
    async getUsuariosAxios() {
      try {
        let respuesta = await this.axios(this.url)
        let usuarios = respuesta.data
        console.log('AXIOS GET USUARIOS', usuarios)
        this.usuariosIngresados = usuarios

        if(this.usuariosIngresados.length){
          this.vacio=false
          console.log(this.vacio)
        }else{
          this.vacio=true
          console.log(this.vacio)
        }
      }
      catch (error) {
        console.error('ERROR AXIOS GET USUARIOS', error)
      }
    },
    
   

    
  }
}


