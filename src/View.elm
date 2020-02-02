module View exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Messages exposing (..)


bodyView : String -> String -> List (Html Msg)
bodyView shortForm longForm =
    [ div [ class "root" ]
        [ div [ class "header" ]
            [ node "canvas" [ id "starFieldCanvas" ] []
            , node "canvas" [ id "shootingStarCanvas" ] []
            , div [ class "overlay" ]
                [ div [ class "head-content" ]
                    [ span [ class "name-heading" ]
                        [ div [] [ text "Hi" ]
                        , div [] [ text "I'm", span [ id "name" ] [ text "Lalit Umbarkar" ] ]
                        ]
                    , div [ class "heading-subtext" ] [ text "I make random things, using random languages" ]
                    , div [ class "social-ico-root lazyload" ]
                        [ a
                            [ class "icon icon-twitter"
                            , href "https://twitter.com/LalitUmbarkar"
                            , rel "noopener"
                            , target "_blank"
                            , title "Twitter"
                            ]
                            [ img [ alt "Twitter Logo", src "/assets/img/Twitter_Logo_Gray.png" ] [] ]
                        , a
                            [ class "icon icon-linkedin-squared"
                            , href "https://www.linkedin.com/in/mrl1605/"
                            , rel "noopener"
                            , target "_blank"
                            , title "LinkedIn"
                            ]
                            [ img [ alt "LinkedIn Logo", src "/assets/img/LI-In-Bug-Gray.png" ] [] ]
                        , a
                            [ class "icon icon-instagram"
                            , href "https://instagram.com/lalitumbarkar"
                            , rel "noopener"
                            , target "_blank"
                            , title "Instagram"
                            ]
                            [ img [ alt "Instagram Logo", src "/assets/img/Insta-logo-Gray.png" ] [] ]
                        , a
                            [ class "icon icon-github-circled"
                            , href "https://github.com/MrL1605"
                            , rel "noopener"
                            , target "_blank"
                            , title "GitHub"
                            ]
                            [ img [ alt "Github Logo", src "/assets/img/GitHub-Mark-Gray.png" ] [] ]
                        ]
                    ]
                ]
            ]
        , div [ class "footer" ]
            [ h2 [ class "about-heading" ] [ text "About Me" ]
            , h3 [ class "heading-subtext" ]
                [ span [] [ text <| "I have " ]
                , span [ title longForm ] [ text shortForm ]
                , span [] [ text " of experience as Software developer." ]
                ]
            , h5 [] [ text "Rest of the details are up to date in following file" ]
            , a [ id "resume-btn", target "_blank", href "https://drive.google.com/open?id=1py41snirD4cyO6F25KSuI6HC1wTCo-ks" ] [ text "RESUME" ]
            ]
        ]
    ]
