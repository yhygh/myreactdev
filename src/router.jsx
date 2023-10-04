import {
  Route,
  Link,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { PageWrapper, NavWrapper, NavItem, OutletWrapper } from "./MainStyled";

import Home from "./Home";
import EffectChallenges from "./learnEffect/effectChallenge/EffectChallenges";
import InputStateQuiz from "./inputState/InputStateQuiz";
import InputStateQuiz1 from "./inputState/InputStateQuiz1";
import Accordion from "./accordion/Accordion";
import Accordion1 from "./accordion/Accordion1";
import Messenger from "./messenger/Messenger";
import Messenger1 from "./messenger/Messenger1";
import TaskApp from "./taskApp/TaskApp";
import TaskApp2 from "./taskApp2/TaskApp2";
import Page from "./page/Page";
import { StatuBar } from "./customHooks/StatusBar";
import StatuBarExternal from "./customHooks/StatusBarExternal";
import Names from "./customHooks/names/Names";
import LearnModal from "./learnEffect/modalDialog/LearnModal";
// import MousePointerMove from "./learnEffect/mouseExamples.jsx/MousePointerMove";
import MousePointerMoveWithHook from "./learnEffect/mouseExamples/MousePointerMoveCustomHook";
import ChatRoomMain from "./customHooks/chatRoom/ChatRoomMain";
import Counter from "./customHooks/counter/Counter";
import PointerCanvas from "./customHooks/pointerCanvas/PointerCanvas";
import StopWatch from "./refs/StopWatch";
import BrokenChatInput from "./refs/BrokenChatInput";
import BrokenChatInput1 from "./refs/BrokenChatInput1";
import FixDebouncing from "./refs/FixDebouncing";
import LatestState from "./refs/LatestState";
import CatFriends from "./refs/CatFriends";
import RestrictRefUsage from "./refs/RestrictRefUsage";
import PalyVideo from "./refs/PlayVideo";
import ImageCarousel from "./refs/ImageCarousel";
import FocusSeparate from "./refs/FocusSeparate";
import NoReconnectEveryStroke from "./learnEffect/noEveryStroke/NoReconnectEveryStroke";
import ConnectionSwitch from "./learnEffect/connectionSwitch/ConnectionSwitch";
import ChainSelect from "./learnEffect/chainSelect/ChainSelect";
import ChainSelectReactDev from "./learnEffect/chainSelect/ChainSelectReactDev";
import Playground from "./learnEffect/Playground";
import ConditionalFocus from "./learnEffect/ConditionalFocus";
import ContactList from "./learnEffect/editContact/ContactList";
import Optimize from "./fullstackcafe/Optimize";
import MyIntersectionObserver from "./learnEffect/intersectionObserver/intersection";

// https://medium.com/age-of-awareness/amazing-new-stuff-in-react-router-v6-895ba3fab6af

const Root = () => {
  return (
    <PageWrapper>
      <NavWrapper>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/editcontact">Edit Contact</Link>
        </NavItem>
        <NavItem>
          <Link to="/effect">Effect Challenges</Link>
        </NavItem>
        <NavItem>
          <Link to="/inputstatequiz">Input State Quiz</Link>
        </NavItem>
        <NavItem>
          <Link to="/accordion">Accordion</Link>
        </NavItem>
        <NavItem>
          <Link to="/messenger">Messenger</Link>
        </NavItem>
        <NavItem>
          <Link to="/taskapp">Task Reduce </Link>
        </NavItem>
        <NavItem>
          <Link to="/taskapp2">Task Reduce + Context </Link>
        </NavItem>
        <NavItem>
          <Link to="/page">Page</Link>
        </NavItem>
        <NavItem>
          <Link to="/statusbar">Status Bar</Link>
        </NavItem>
        <NavItem>
          <Link to="/statusbarexternal">Status Bar From External</Link>
        </NavItem>
        <NavItem>
          <Link to="/names">Names</Link>
        </NavItem>
        <NavItem>
          <Link to="/learnmodal">Learn Modal</Link>
        </NavItem>
        <NavItem>
          <Link to="/pointermove">Learn Mouse Pointer Move</Link>
        </NavItem>
        <NavItem>
          <Link to="/pointermovecanvas">Mouse Pointer Move Continuous</Link>
        </NavItem>
        <NavItem>
          <Link to="/chatroom">Chat Room</Link>
        </NavItem>
        <NavItem>
          <Link to="/counter">Counter</Link>
        </NavItem>
        <NavItem>
          <Link to="/stopwatch">Stop Watch</Link>
        </NavItem>
        <NavItem>
          <Link to="/brokenchat">Broken Chat Input</Link>
        </NavItem>
        <NavItem>
          <Link to="/fixdebouncing">Fix Debouncing</Link>
        </NavItem>
        <NavItem>
          <Link to="/lateststate">Read Latest State</Link>
        </NavItem>
        <NavItem>
          <Link to="/catfriends">Cat Friends</Link>
        </NavItem>
        <NavItem>
          <Link to="/restrictrefusage">Restrict Ref Usage</Link>
        </NavItem>
        <NavItem>
          <Link to="/playvideo">Play Video</Link>
        </NavItem>
        <NavItem>
          <Link to="/focusseparate">Focus Separate</Link>
        </NavItem>
        <NavItem>
          <Link to="/noeverystroke">No Reconnect Every Stroke</Link>
        </NavItem>
        <NavItem>
          <Link to="/connectionswitch">Connection Switch</Link>
        </NavItem>
        <NavItem>
          <Link to="/chainselect">Chain Select</Link>
        </NavItem>
        <NavItem>
          <Link to="/chainselectreactdev">Chain Select React Dev</Link>
        </NavItem>
        <NavItem>
          <Link to="/imagecarousel">Image Carousel</Link>
        </NavItem>
        <NavItem>
          <Link to="/playground">Play Ground</Link>
        </NavItem>
        <NavItem>
          <Link to="/conditionalfocus">Conditional Focus</Link>
        </NavItem>
        <NavItem>
          <Link to="/optimize">Optimize From Full Stack Cafe</Link>
        </NavItem>
        <NavItem>
          <Link to="/intersectionobserver">Learn Intersection Observer</Link>
        </NavItem>
      </NavWrapper>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </PageWrapper>
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" index element={<Home />} />
      <Route path="/editcontact" element={<ContactList />} />
      <Route path="/effect" element={<EffectChallenges />} />
      <Route path="/inputstatequiz" element={<InputStateQuiz />} />
      <Route path="/accordion" element={<Accordion />} />
      <Route path="/messenger" element={<Messenger1 />} />
      <Route path="/taskapp" element={<TaskApp />} />
      <Route path="/taskapp2" element={<TaskApp2 />} />
      <Route path="/page" element={<Page />} />
      <Route path="/statusbar" element={<StatuBar />} />
      <Route path="/statusbarexternal" element={<StatuBarExternal />} />
      <Route path="/names" element={<Names />} />
      <Route path="/learnmodal" element={<LearnModal />} />
      <Route path="/pointermove" element={<MousePointerMoveWithHook />} />
      <Route path="/pointermovecanvas" element={<PointerCanvas />} />
      <Route path="/chatroom" element={<ChatRoomMain />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/stopwatch" element={<StopWatch />} />
      <Route path="/brokenchat" element={<BrokenChatInput1 />} />
      <Route path="/fixdebouncing" element={<FixDebouncing />} />
      <Route path="/lateststate" element={<LatestState />} />
      <Route path="/catfriends" element={<CatFriends />} />
      <Route path="/restrictrefusage" element={<RestrictRefUsage />} />
      <Route path="/playvideo" element={<PalyVideo />} />
      <Route path="/imagecarousel" element={<ImageCarousel />} />
      <Route path="/focusseparate" element={<FocusSeparate />} />
      <Route path="/noeverystroke" element={<NoReconnectEveryStroke />} />
      <Route path="/connectionswitch" element={<ConnectionSwitch />} />
      <Route path="/chainselect" element={<ChainSelect />} />
      <Route path="/chainselectreactdev" element={<ChainSelectReactDev />} />
      <Route path="/playground" element={<Playground />} />
      <Route path="/conditionalfocus" element={<ConditionalFocus />} />
      <Route path="/optimize" element={<Optimize />} />
      <Route
        path="/intersectionobserver"
        element={<MyIntersectionObserver />}
      />
    </Route>
  )
);
