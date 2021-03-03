


// console.log(searchTerm);

$(document).ready(function (searchTerm) {


    var searchTerm = $("search").val();
    if (!searchTerm || searchTerm.length === 0 ) {
        $("#search").val("apple");
        searchTerm = $("#search").val();
    }

    loadArticles(searchTerm);

    $("#searchBtn").click(function(){
        searchTerm = $("$search").val();
        loadArticles(searchTerm);
    });

    // $('#searchBtn').click{
    //     var searchTerm = $("#search").val();

    // }
    //     console.log(searchTerm);

    function loadArticles(searchTerm){
        $.ajax({
            url: "https://newsapi.org/v2/everything?q= " + searchTerm + " &sortBy=popularity&apiKey=2139dc76ae1b4dcc88f56c7096715f69",
            type: "GET",
            dataType: "json",
            success: function (result, status) {
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

            error: function (xhr, status, error) {
                console.log(error);

                return;
            }
        })
    }
});



