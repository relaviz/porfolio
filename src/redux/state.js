const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_NEWS = 'UPDATE-NEW-NEWS';
const SEND_NEWS = 'SEND-NEWS';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'It`s my firts post', likesCount: 12 },
                { id: 2, message: 'Hello world', likesCount: 20 },
                { id: 3, message: 'How are you?', likesCount: 11 },
                { id: 4, message: 'How are you? Hhoho', likesCount: 0 }
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Valera' },
                { id: 2, name: 'Anton' },
                { id: 3, name: 'Slavik' },
                { id: 4, name: 'Pasha' },
                { id: 5, name: 'Evald' },
                { id: 6, name: 'Andrew' },
                { id: 7, name: 'Tomi' }
            ],

            messages: [
                { id: 1, message: 'Yo' },
                { id: 2, message: 'Hello world' },
                { id: 3, message: 'How are you?' },
            ],
            newMessageBody: ''
        },
        profileIcons: {
            icon: [
                { id: 1, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3snEv9CcY-w2OVD4wwVZmTS5QuFRnO2xZbg&usqp=CAU' },
                { id: 2, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhlUJ9_4Au3qrw7-DlLRAC0N14CdTgfzHUsg&usqp=CAU' },
                { id: 3, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTS2ACqki7yvVTzTTwm1zd82RGybYE5uQjLBg&usqp=CAU' },
                { id: 4, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQt8j1i9HnXi9L1vqX6y5Xi18r-NnDXnMfbg&usqp=CAU' }
            ],

        },
        newsPage: {
            news: [
                {id: 1, newsMessage: 'First new news'}
            ],
            newNewsBody: ''
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({ id: 4, message: body });
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-NEWS') {
            this._state.newsPage.newNewsBody = action.news;
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND-NEWS') {
            let news = this._state.newsPage.newNewsBody;
            this._state.newsPage.newNewsBody = '';
            this._state.newsPage.news.push({ id: 2, newsMessage: news });
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
});
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
});
export const sendNewsCreator = () => ({
    type: SEND_NEWS
});
export const updateNewNewsBodyCreator = (news) => ({
    type: UPDATE_NEW_NEWS, news: news
});

window.store = store;

export default store;

