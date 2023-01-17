from django.shortcuts import render

# Create your views here.

def games_home(request):
    return render(request, "games_home.html", {})



def spec_game(request, gm):
    # validate game name
    gm_name = gm
    return render(request, gm_name + ".html", {})