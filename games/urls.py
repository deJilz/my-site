from django.urls import path
from . import views

urlpatterns = [
    path("", views.games_home, name="games_home"),
    path("<str:gm>/", views.spec_game, name="spec_game"),
]