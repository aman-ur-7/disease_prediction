import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0px;
        margin: 0px;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
    }
            .container{
            background-color: white;
            box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
            padding: 50px;
            width: 700px;
            height: 370px;
            margin: auto ;
            border-radius: 7px;
        }
    .patient{
        background-color: #f3f5f7;
        height: 100vh;
        display: flex;
        justify-self: center;
        /* padding: 70px; */
        /* .container{
            background-color: white;
            box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
            padding: 50px;
            width: 700px;
            height: 370px;
            margin: auto ;
            border-radius: 7px;
        } */
    }

    .patient-program{
        display: flex;
        flex-direction: column;
        gap: 70px;

        &>h1{
            font-weight: 400;
        }

        &>div{
            display: flex;
            justify-content: space-between;

            &>section{
                border: .5px solid #1a1a1a2e;
                cursor: pointer;
                padding: 20px;
                border-radius: 7px;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 300px;
                gap: 10px;

                &>svg{
                    width: 70px;
                    height: 70px;
                    color: #1471c9;
                }

                &>span{
                    font-size: larger;
                    font-weight: 400;
                    color: #2d2d2deb;
                }
            }
        }
    }

    .patient_next{
        background-color: #f3f5f7;
        height: 100vh;
        display: flex;
        justify-self: center;

        .container>div{
            display: flex;
            flex-direction: column;
            gap: 70px;

            &>h1{
                font-weight: 400;
            }
            &>div{
            display: flex;
            justify-content: space-between;

            &>div{
                border: .5px solid #1a1a1a2e;
                cursor: pointer;
                padding: 20px;
                border-radius: 7px;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 300px;
                gap: 10px;

                    &>svg{
                    width: 70px;
                    height: 70px;
                    color: #1471c9;
                }
                    &>span{
                    font-size: larger;
                    font-weight: 400;
                    color: #2d2d2deb;
                }
            }
            }
        }
    }
    .symptoms{
        background-color: #f3f5f7;
        height: 100vh;
        display: flex;
        justify-self: center;

        .symptoms_insider{
            display: flex;
            flex-direction: column;
            gap: 20px;


            &>h1{
                font-weight: 400;
            }

            &>section{
                display: grid;
                grid-template-columns: 3fr 1fr;

                &>input{
                    padding: 10px;
                    border-radius: 7px;
                    color: #1471c9;
                    font-size: large;
                    outline: 2px solid #1471c9;
                    border: none;
                }
            }
        }


        .if_todo_not{
            display: flex;
            background-color: #f3f5f7;
            width: 500px;
            padding: 20px;
            text-align: center;
            align-items: center;
            justify-content: center;
            height: 100px;
            border-radius: 7px;
            font-size: 20px;
            color: #6d6d6d;
        }
    
        .search_items{
            cursor: pointer;
            padding: 7px;
            background-color: white;
        }
        .search_items:hover{
            background-color: #f3f5f7;
            width: 520px;
            border-radius: 7px;
        }

        .searched_items{
            background-color: #1471c9;
            color: white;
            padding: 7px;
            border-radius: 7px;
            display: flex;
            align-items: center;
            text-align: center;
            font-size: larger;
            gap: 10px;
            margin-right: 10px;
            /* border: 1px solid red; */

            &>span{
                display: flex;
                justify-content: center;
                cursor: pointer;
                background-color: #1066b7;
                border-radius: 50%;
                padding: 2px;

                &>svg{
                    width: 17px;
                    height: 17px;
                }
            }
        }
    }

    .result{
        background-color: #f3f5f7;
        height: 100vh;
        display: flex;
        justify-self: center;
        display: flex;

    }
        .content{
            display: flex;
            flex-direction: column;
            gap: 40px;

            &>section{
                display: flex;
                flex-direction: column;
                gap: 10px;

                &>h1{
                    font-size: 30px;
                }
                &>p{
                    font-size: large;
                    color: #6d6d6d;
                }
            }

            &>div{
                display: flex;
                flex-direction: column;
                gap: 20px;

                &>h2{
                    font-weight: 400;
                    color: #1471c9;
                }

                .disease_result{
                    font-size: large;
                }
            }
        }
        .disease_button{
            display: flex;
            padding: 10px;
            cursor: pointer;
            color: #1471c9;
            font-size: large;
            border: none;
            justify-self: center;
            justify-content: center;
            width: 100px;
            border-radius: 7px;
            background: #f3f5f7;
        }

        .disease_button:hover{
            background: #dbdbdb;
            transition: .7ms;
        }

        .over_flow{
            max-height:70px; /* Set the maximum height */
            overflow: auto;
        }

        .login_page{
            background-color: #f3f5f7;
            height: 100vh;
            display: flex;
        }

        .contain{
            background-color: white;
            box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
            padding: 50px;
            width: 450px;
            height: 370px;
            margin: auto ;
            border-radius: 7px;
            display: flex;
            flex-direction: column;
            gap: 20px;

            .login_form{
                display: flex;
                flex-direction: column;
                gap: 20px;
                &>:first-of-type{
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
            }
        }

        .input{
            padding: 10px;
            font-size: large;
            color: #1471c9;
            border-radius: 7px;
            outline: none;
            border: 1px solid black;
            }

        .login_insider{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .login_button{
            background-color: #1471c9;
            color: white;
            padding: 10px;
            font-size: large;
            width: 70px;
        }

        .consult:hover{
            color: #1471c9;
        }
        .consultant_map{
            width: 100%;
            height: 70vh;
        }

`;
