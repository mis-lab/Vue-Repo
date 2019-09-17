import Vue from 'vue';
import '../designTheme/index.less';
import {
    Affix,
    Alert,
    Anchor,
    AnchorLink,
    AutoComplete,
    Avatar,
    BackTop,
    Badge,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    ButtonGroup,
    Card,
    Carousel,
    CarouselItem,
    Cascader,
    Cell,
    CellGroup,
    Checkbox,
    CheckboxGroup,
    Col,
    Collapse,
    ColorPicker,
    Content,
    DatePicker,
    Divider,
    Drawer,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Footer,
    Form,
    FormItem,
    Header,
    Icon,
    Input,
    InputNumber,
    Scroll,
    Sider,
    Split,
    Submenu,
    Layout,
    LoadingBar,
    Menu,
    MenuGroup,
    MenuItem,
    Message,
    Modal,
    Notice,
    Option,
    OptionGroup,
    Page,
    Panel,
    Poptip,
    Progress,
    Radio,
    RadioGroup,
    Rate,
    Row,
    Select,
    Slider,
    Spin,
    Step,
    Steps,
    Table,
    Tabs,
    TabPane,
    Tag,
    Time,
    Timeline,
    TimelineItem,
    TimePicker,
    Tooltip,
    Transfer,
    Tree,
    Upload,
    Circle,
    Switch
} from 'iview';

let components = {
    Affix,
    Alert,
    Anchor,
    AnchorLink,
    AutoComplete,
    Avatar,
    BackTop,
    Badge,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    ButtonGroup,
    Card,
    Carousel,
    CarouselItem,
    Cascader,
    Cell,
    CellGroup,
    Checkbox,
    CheckboxGroup,
    Col,
    Collapse,
    ColorPicker,
    Content,
    DatePicker,
    Divider,
    Drawer,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Footer,
    Form,
    FormItem,
    Header,
    Icon,
    Input,
    InputNumber,
    Scroll,
    Sider,
    Split,
    Submenu,
    Layout,
    LoadingBar,
    Menu,
    MenuGroup,
    MenuItem,
    Message,
    Modal,
    Notice,
    Option,
    OptionGroup,
    Page,
    Panel,
    Poptip,
    Progress,
    Radio,
    RadioGroup,
    Rate,
    Row,
    Select,
    Slider,
    Spin,
    Step,
    Steps,
    Table,
    Tabs,
    TabPane,
    Tag,
    Time,
    Timeline,
    TimelineItem,
    TimePicker,
    Tooltip,
    Transfer,
    Tree,
    Upload
};

components = {
    ...components,
    iButton: Button,
    iCircle: Circle,
    iCol: Col,
    iContent: Content,
    iForm: Form,
    iFooter: Footer,
    iHeader: Header,
    iInput: Input,
    iMenu: Menu,
    iOption: Option,
    iProgress: Progress,
    iSelect: Select,
    iSwitch: Switch,
    iTable: Table,
    iTime: Time
};

Object.keys(components).forEach(function(key) {
    Vue.component(key, components[key]);
});
Vue.prototype.$Loading = LoadingBar;
Vue.prototype.$Message = Message;
Vue.prototype.$Modal = Modal;
Vue.prototype.$Notice = Notice;
Vue.prototype.$Spin = Spin;
Message.config({
    duration: 5
});
