module Main exposing (..)

import Browser exposing (Document)
import InterstellarCanvas exposing (displayCanvas)
import Messages exposing (Msg(..))
import Time exposing (Month(..), utc)
import Time.Extra as Interval exposing (diff)
import View exposing (bodyView)


main =
    Browser.document
        { init = \() -> init
        , update = update
        , view = view
        , subscriptions = \_ -> Time.every 1000 UpdateExperience
        }


type alias Model =
    { shortForm : String, longForm : String }


init : ( Model, Cmd Msg )
init =
    ( { longForm = "0 Years, 0 months, 0 days", shortForm = "0yr 0m" }, displayCanvas () )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg _ =
    case msg of
        UpdateExperience currentTime ->
            let
                jobStart =
                    Time.millisToPosix 1494824532442

                years =
                    String.fromInt <| diff Interval.Year utc jobStart currentTime

                months =
                    String.fromInt <| modBy 12 <| diff Interval.Month utc jobStart currentTime

                days =
                    (String.fromInt <| modBy 365 <| diff Interval.Day utc jobStart currentTime) ++ " days, "

                hours =
                    (String.fromInt <| modBy 24 <| diff Interval.Hour utc jobStart currentTime) ++ " hours, "

                minutes =
                    (String.fromInt <| modBy 60 <| diff Interval.Minute utc jobStart currentTime) ++ " minutes, "

                seconds =
                    (String.fromInt <| modBy 60 <| diff Interval.Second utc jobStart currentTime) ++ "seconds"

                shortForm =
                    years ++ " years, " ++ months ++ " months"

                longForm =
                    years ++ " years, " ++ months ++ " months," ++ days ++ hours ++ minutes ++ seconds
            in
            ( { shortForm = shortForm, longForm = longForm }, Cmd.none )


view : Model -> Document Msg
view model =
    { title = "Lalit Umbarkar"
    , body = bodyView model.shortForm model.longForm
    }
