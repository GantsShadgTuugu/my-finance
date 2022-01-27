// Дэлгэцтэй ажиллах контроллер
var uiController = (function(){

})
// Санхүүтэй ажиллах контроллер
var financeController = (function(){

})
// Програмын холбогч контроллер
var appController = (function(uiController, fnController){

    var ctrlAddItem = function(){
        // 1. Оруулах өгөгдлий дэлгэцнээс олж авна.
        console.log("Дэлгэцээс өгөгдлөө авах хэсэг");
        // 2. Олж авсан өгөгдлүүдээ санхүүтэй ажиллах контроллерт дамжуулж тэнд хадгална.

        // 3. Олж авсан өгөгдлүүдээ веб дээрээ тохирох хэсэгт нь гаргана.

        // 4. Төсвийг тооцоолно.
        
        // 5. Эцсийн үлдэгдэл тооцоог дэлгэцэнд гаргана.
    }
    document.querySelector(".add__btn").addEventListener("click", function(){
        ctrlAddItem();
    });

    document.addEventListener("keypress", function(event){
        if(event.keyCode === 13 || event.which === 13){
        ctrlAddItem();
        }
    });

})(uiController, financeController);