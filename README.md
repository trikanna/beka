# Beka

## The Challenge

- Build a drawer menu similar to the one shown in the animation below
- Add a couple of random screens based on the following pattern:

```md
DrawerMenu(one in a gif)
   tab navigator (bottom tab navigation)
       home (stack navigation)
           screen1
           screen2
       contact
```

`Note: Have in mind that on the GIF above, tab navigation isn’t present, please add it according above pattern.`

## Requirements

- The screen should be built using React Native
- Use of Typescript is required
- Tab navigation needs to be configured (as above)
- Pay attention that the Drawer needs to be a parent component of other children


## Evaluation Criteria

Your submission will be evaluated on the following aspects of your project:

1. **React Code** (optimizations, structuring, and logic) **[This is very important to us]**
2. UI (how similar it looks to the UI).
3. How well navigation is integrated. (According to above mentioned navigation pattern)
4. The functionality of the application.

## Duration

2 hours to send deliverable (+30 min to compile a short README file explaining your system and thought process). Please add a video/gif of the final product and how it looks like.

## Deliverable

Access to GitHub repo or zip file

# Notes, Assumptions and `¯\_(ツ)_/¯`

- Using latest version of RN 🎉🎂
- `@react-navigation/*` packages (`drawer`, `bottom-tabs`, `stack` and an extra `modal` just because the animation is nice).
- Custom drawer animations `react-native-reanimated 2` plain simple, no sequences there.
- No reference to specific icons, so `Ant Design FTW!` (that's were cocoapods and autolink goes bad).
- TypeScript, babel, prettier, eslint (regular stuff). No need to argue about formatting.
- In total **more than 2 hours**, new m1 machine setup, but it's always fun to deal with dependency conflicts. 🤦‍♂️
- Intended to do a couple tests, but not Today.
- No stylesheet optimizations. At the begining I've started with `styled-components` but then rolled back to just inline styles. Just for convenience there are a couple constants (colors, fonts, etc).
- Flat folder structure, it could be done in a `src/` folder as usual (I don't like deeply nested routes, also could be implemented via **tsconfig aliases**).
- Even tho the challenge gif seems to be using `SF fonts` I've used `Poppins` 😄
- There is a small variation in the custom drawer menu item's design to balance and let them "breathe", moved the Sign Out button to the bottom (if needed just uncomment the original position).
- The drawer additional routes (`Your Card`, `Favourites` and `Your Orders`) are not implemented. In case of handling state, we can lift up some simple state, or introduce a thin context api layer to keep navigation state consistent (no need to introduce redux for a small demo).
- Even tho I don't like nested stacks, it's there. With a funny hack to get transparency in order to notice the rounded corners animation on gesture or toggling drawer state.
- No memoization at this stage, nor fancy code or hooks abuse. `KISS`.
- **Suggestion**: It will be nice to include in requirements some type of async call to fetch data and display in order to use Suspense API or Empty Views. It could be helpful to see some usages of map, reduce, Map, etc.

# Thanks the opportunity!

As a personal note, I don't have a public portfolio on github or personal website. Simple, as per the last -probably- 7 years-. I'm working exclusively for clients (everything under NDA), no freelance projects, so nothing to show (but we can talk a lot if you want about experiences, challenges and architectures being used)

## Thanks!

![Alt Text](https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif)

**PS**: was not part of the requirements, but `a11y` (worked on `AA` and `AAA` grade projects in the past), `i18n` and locales handled via `t(🍵)` are quite often part of application's scaffoldings and lastly `data-testId` should be there to facilitate e2e selectors. Not present in this code.

# Here is Beka

Check the PR for a hi-res video.

![Beka In Action](BekaGif.gif)
