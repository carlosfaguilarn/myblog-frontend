const styles = (theme) => (
  {  
    tabTitle: {
      width: '100%',
      margin: 0,
      //marginBottom: 32,
      textAlign: 'left',
      fontFamily: '"Segoe UI"',
      fontSize: 14,
    },
    tabContainer:{
      width: 518,
      height: 720,
      paddingTop: 16,
      paddingLeft: 24,
      paddingRight: 24, 
      float: 'left',
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 0px 5px -5px #000000',
    }, 
    tabContainerLeft:{
      width: 518,
      height: 720,
      paddingTop: 16,
      paddingLeft: 24,
      paddingRight: 24,
      marginLeft: 10,
      float: 'left',
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 0px 5px -5px #000000',
    },
    inputForm: {
      width: '100%',
      border: 'solid 2px rgba(0, 0, 0, 0.4)',
      color: '#000000',
      fontSize: 14,
      fontFamily: '"Segoe UI"',
      paddingLeft: 12, 
      textTransform: 'uppercase',
      borderRadius:'5px',
    },  
    inputFormEnable: {
      width: '100%',
      border: 'solid 2px rgba(0, 0, 0, 0.4)',
      color: '#000000',
      fontSize: 14,
      fontFamily: '"Segoe UI"',
      paddingLeft: 12, 
      textTransform: 'uppercase',
      borderRadius:'5px',
      '&:hover':{
        border: 'solid 2px #001E61',
      }
    },       
    inputFormDisable: {
      width: '100%',
      border: 'solid 2px rgba(0, 0, 0, 0.2)',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      fontSize: 14,
      paddingLeft: 12, 
      borderRadius:'5px',
    },
    labelForm:{
      float: 'left',
      fontFamily: '"Segoe UI"',
      fontSize: 14,
      color: '#000000',
    },
    checkForm: {
      width: '100%',
      color: '#80838B',
    },
    form: {
      marginTop: 32,
    },
    containerForm: {
      display: 'flex',
      marginBottom: 24,
    },
    col50: {
      width: '50%',
      paddingRight: 5,
      paddingLeft: 5,
    },
    col100: {
      width: '100%',
      paddingRight: 5,
      paddingLeft: 5,
    },
    formControl:{
        width: '100%',
    }
  } 
);

export default styles;