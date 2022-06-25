export default class Api{

    api(path,method='GET',body=null,requiresAuth=false,credentials=null){
        const url="http://localhost:3000/"+path;
        const options={
            method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        }

        if(body){

            options.body=JSON.stringify(body);
        }
        if(requiresAuth){
        }
        return fetch(url,options);
    }

    async getAllBooks (){

        try{
        let getBooks= await this.api("api/v1/books");
       
            if(getBooks.status!=200){
                throw new Error(
                    console.log(error)
                )
            }else{
                return getBooks.json();
            }

        }catch(e){
            console.log(e);
        }
    }

    async deleteBook(id){
        try{
            let book = await this.api(`api/v1/delete/${id}`, 'DELETE');
            if(book.status!=200){
                throw new Error(
                    console.log('error')
                )
            }else{
                return book;
            }
        }catch(e){
            console.log(e);
        }
    }

    async editBook(id, bk){
        try{
            let book = await this.api(`api/v1/edit/${id}`, 'PUT', bk);
            if(book.status!=200){
                throw new Error(
                    console.log('error')
                )
            }else{
                return book;
            }
        }catch(e){
            console.log(e)
        }
    }
}