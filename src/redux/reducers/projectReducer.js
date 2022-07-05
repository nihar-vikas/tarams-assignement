import image1 from '../../assets/userIcons/userIcon1.webp';
import image2 from '../../assets/userIcons/userIcon2.webp';
import image3 from '../../assets/userIcons/userIcon3.webp';
import image4 from '../../assets/userIcons/userIcon4.webp';

const userList = [
    { id: 1, name: 'Samantha', profile_image: image1 },
    { id: 2, name: 'Surya', profile_image: image2 },
    { id: 3, name: 'Mary', profile_image: image3 },
    { id: 4, name: 'Raja', profile_image: image4 },
];

const initialState = {
    openUpdateModel: false,
    selectedItem: {},
    projects: [
        { id: 1, projectName: 'React', budget: '500', users: userList, complete: 30, logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngfind.com%2Fpngs%2Fm%2F685-6854970_react-logo-png-png-download-logo-png-reactjs.png&f=1&nofb=1' },
        { id: 2, projectName: 'Angular', budget: '500', users: userList, complete: 50, logo: 'https://img2.gratispng.com/20180701/rht/kisspng-angularjs-logo-javascript-security-token-5b38e22b8a3f38.7851363415304545715663.jpg' },
        { id: 3, projectName: 'Vue', budget: '500', users: userList, complete: 70, logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngfind.com%2Fpngs%2Fm%2F150-1507248_image-library-stock-file-vue-js-logo-wikimedia.png&f=1&nofb=1' },
        { id: 4, projectName: 'Next', budget: '500', users: userList, complete: 80, logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.stackshare.io%2Fservice%2F5936%2Fnextjs.png&f=1&nofb=1' },
        { id: 5, projectName: "Solid", budget: '500', users: userList, complete: 100, logo: "https://avatars.githubusercontent.com/u/79226042?v=4" },
        { id: 6, projectName: 'Express', budget: '500', users: userList, complete: 30, logo: 'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png' },
        { id: 7, projectName: 'MongoBD', budget: '500', users: userList, complete: 30, logo: 'https://w1.pngwing.com/pngs/711/379/png-transparent-green-grass-mongodb-database-documentoriented-database-dashboard-nosql-bson-javascript-thumbnail.png' },
        { id: 8, projectName: 'NodeJS', budget: '500', users: userList, complete: 30, logo: 'https://w1.pngwing.com/pngs/885/534/png-transparent-green-grass-nodejs-javascript-react-mean-angularjs-logo-symbol-thumbnail.png' },
        { id: 9, projectName: 'HTML5', budget: '500', users: userList, complete: 10, logo: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png' },
        { id: 10, projectName: 'CSS3', budget: '500', users: userList, complete: 30, logo: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png' },
        { id: 11, projectName: 'Java Script', budget: '500', users: userList, complete: 30, logo: 'https://i.pinimg.com/originals/28/75/3d/28753ddf79d70042ba86564947e13bf5.png' },
        { id: 12, projectName: 'Phoenix', budget: '500', users: userList, complete: 30, logo: 'https://e7.pngegg.com/pngimages/835/332/png-clipart-bird-illustration-phoenix-logo-icons-logos-emojis-tech-companies-thumbnail.png' },
        { id: 13, projectName: 'Svelte', budget: '500', users: userList, complete: 30, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png' },
        { id: 14, projectName: 'Deno', budget: '500', users: userList, complete: 30, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Deno.svg/1200px-Deno.svg.png' },
        { id: 15, projectName: 'NuxtJS', budget: '500', users: userList, complete: 30, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/1200px-Nuxt_logo.svg.png' },
        { id: 16, projectName: 'Blazor', budget: '500', users: userList, complete: 30, logo: 'https://devblogs.microsoft.com/aspnet/wp-content/uploads/sites/16/2019/04/BrandBlazor_nohalo_1000x.png' },
        { id: 17, projectName: 'Fastify', budget: '500', users: userList, complete: 30, logo: 'https://camo.githubusercontent.com/ca1e0b0caf70f467ff9d593f975e0812510d033de7a603c868ab9fccf1150c64/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f666173746966792e737667' },
        { id: 18, projectName: 'Python', budget: '500', users: userList, complete: 30, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png' },
        { id: 19, projectName: 'Java', budget: '500', users: userList, complete: 30, logo: 'https://cdn-icons-png.flaticon.com/512/226/226777.png' },
        { id: 20, projectName: 'PHP', budget: '500', users: userList, complete: 30, logo: 'https://w7.pngwing.com/pngs/751/3/png-transparent-logo-php-html-others-text-trademark-logo-thumbnail.png' },
    ],
};

export const PROJECT_LIST_UPDATES = 'PROJECT_LIST_UPDATES';
export const OPEN_UPDATE_MODEL = 'OPEN_UPDATE_MODEL';
export const SET_SELECTED_ITEM = 'SET_SELECTED_ITEM';

const projectReducer = (state = initialState, action) => {
    switch (action?.type) {
        case PROJECT_LIST_UPDATES: {
            if (state?.projects) {
                const newProjectList = JSON.parse(JSON.stringify(state?.projects));
                newProjectList[action?.payload?.id - 1] = action?.payload;
                return { ...state, projects: newProjectList }
            }
            return { ...state }
        }
        case OPEN_UPDATE_MODEL: {
            return { ...state, openUpdateModel: action.payload }
        }
        case SET_SELECTED_ITEM: {
            return { ...state, selectedItem: action.payload }
        }
        default:
            return state;
    }
};

export default projectReducer;