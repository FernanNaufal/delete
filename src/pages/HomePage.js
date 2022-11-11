import React from "react";
//import PropTypes from "prop-types";
//import { getActiveNotes } from "../utils/api";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import AddButton from "../components/AddButton";
import NoteList from "../components/NoteList";
import {getNote, deleteNote} from "../utils/api"


function HomePageWrapper ()  {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');

    function changeSeachParams(keyword) {
        setSearchParams({keyword});
    }

    return <HomePage defaultKeyword={keyword} keyword={changeSeachParams} />

}

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [],
            keyword: props.defaultKeyword || '',
        }

        this.onKeywordHandler = this.onKeywordHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
   }

   async componentDidMount() {
    const { data } = await getNote();
    
    this.setState(() => {
      return {
        notes: data
      }
    })
  }

  async onDeleteHandler(id) {
    await deleteNote(id);

    // update the contact state from api.js
    const { data  } = await getNote();
    this.setState(() => {
      return {
        notes: data,
      }
    });
  }

  
    onKeywordHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });
        this.props.keywordChange(keyword);
    }

    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title.toLocaleLowerCase().includes(
                this.state.keyword.toLocaleLowerCase(),
            )
        });
        return (
            <section className="homepage">
                <h2>Catatan Aktif</h2>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordHandler} />
                <NoteList notes={notes} />
                <AddButton />
            </section>
        )
    }
    
}




export default HomePageWrapper;