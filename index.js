var unique_id_count = 0

if(!String.prototype.id){
  Object.defineProperty(String.prototype, 'id', {
    get: function() {
      unique_id_count++;
      return this + '-' +unique_id_count
    }
  });
}

if(!Object.prototype.id){
 	Object.prototype.id = function(){
        unique_id_count++
    	return 'unique-' + unique_id_count
    }
}
