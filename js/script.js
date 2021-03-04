$(document).ready(function (searchTerm) {

    var searchTerm = "top-headlines?country=" + $("#country").val();

    console.log(searchTerm);
    loadArticles(searchTerm,country);

    $("#searchBtn").on("click",function(){
        searchTerm = "everything?q=" + $("#search").val();
        loadArticles(searchTerm);
        $("#search").html("");
    });

    $("#country").on("click",function(){
        searchTerm = "top-headlines?country=" + $("#country").val();
        loadArticles(searchTerm);
    });

    console.log(searchTerm);

    function loadArticles(searchTerm,){
        $.ajax({
            url: "https://newsapi.org/v2/"+searchTerm+"&sortBy=popularity&apiKey=2139dc76ae1b4dcc88f56c7096715f69",
            type: "GET",
            dataType: "json",
            success: function (result) {
                console.log(result);
                $("#latestNews").html("");
                for (let i = 0; i < result.articles.length; i++) {
                    $("#latestNews").append(
                        '<div class="col">' +
                        '<div class="card m-2">' +
                        '<img src=" ' + result.articles[i].urlToImage + '" class="card-img-top" alt="...">' +
                        '<div class="card-body">' +
                        '<h5 class="card-title"> ' + result.articles[i].title + '</h5>' +
                        '<p class="card-text">' + result.articles[i].description + '</p>' +
                        '</div>' +
                        '</div>' +
                        '</div>'
                    )
                }
            },

            error: function (error) {
                console.log(error);

                return;
            }
        })
    }
});



