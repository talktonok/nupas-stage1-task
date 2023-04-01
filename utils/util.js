
  const util = {
   statusCode : null,
   type : null,
   data : null,
   message : null,
  
  
     setSuccess  (statusCode, message, data){
      this.statusCode = statusCode;
      this.message = message;
      this.data = data;
      this.type = 'success';
    },
  
     setError (statusCode, message){
      this.statusCode = statusCode;
      this.message = message;
      this.type = 'error';
    },
  
     send  (res) {
      const result = {
        status: this.type,
        message: this.message,
        data: this.data,
      };
  
      if (this.type === 'success') {
        return res.status(this.statusCode).json(result);
      }
      return res.status(this.statusCode).json({
        status: this.type,
        message: this.message,
        data: this.data,
      });
    }
    
   }
   
  module.exports = util