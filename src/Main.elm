module Main exposing (..)

import Browser exposing (Document)
import Html exposing (..)
import Messages exposing (Msg(..))
import Platform.Sub as Subs
import View exposing (bodyView)


main =
    Browser.document
        { init = init
        , update = update
        , view = view
        , subscriptions = \_ -> Subs.none
        }


type alias Model =
    Int


init : String -> ( Model, Cmd Msg )
init str =
    ( 0, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Something ->
            ( model, Cmd.none )


view : Model -> Document Msg
view model =
    { title = "Lalit Umbarkar"
    , body = [ bodyView ]
    }
