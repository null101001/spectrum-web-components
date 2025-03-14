import './sp-menu-COMiLBq_.js';
import './sp-popover-eH2vhmTo.js';
import './sp-action-menu-DfWufdHx.js';
import './sp-menu-item-sJEZa_5v.js';
import './sp-menu-divider-BwF3zFnf.js';
import './sp-menu-group-B--kc-nG.js';
import './sp-icon-DHw3q-p5.js';
import './sp-icon-checkmark-circle-BvjR225z.js';
import './sp-icon-export-BwYxq0cN.js';
import './sp-icon-folder-open-B40JYztg.js';
import './sp-icon-share-DMnhHE1J.js';
import './sp-icon-show-menu-BzX9xKxp.js';
import { x } from './lit-html-COgVUehj.js';
import './lit-element-BulMEkr1.js';
import './RovingTabindex-BIFuw_W7.js';
import './FocusGroup-CQTGJWkN.js';
import './sizedMixin-D4VoaNlz.js';
import './define-element-2VgsDjbW.js';
import './query-DQF6X5qW.js';
import './base-u8Z1Hrsd.js';
import './Popover-CY10DRij.js';
import './sp-action-button-lv7YPDyg.js';
import './sp-icon-corner-triangle300-CCut8pNa.js';
import './custom-tag-B5IH9PTE.js';
import './CornerTriangle300-B0AKm-jy.js';
import './IconBase-BC0FCRBc.js';
import './state-ChcedIDn.js';
import './ButtonBase-DcuiXj8E.js';
import './like-anchor-BBONMzyI.js';
import './if-defined-DDJGFaN4.js';
import './focusable-D81tHnNY.js';
import './focus-visible-D29Av9Xb.js';
import './observe-slot-text-Mz9mFVuX.js';
import './mutation-controller-D2lT1xZk.js';
import './query-assigned-nodes-DAYI4epk.js';
import './observe-slot-presence-Ceiwt-jV.js';
import './sp-icon-more-DKkQ0reB.js';
import './custom-tag-Diwq7nXX.js';
import './More-D5VvzTyj.js';
import './slottable-request-event-DXuuyGoq.js';
import './Picker-D0BRsD1o.js';
import './spectrum-icon-chevron.css-CeYia-Jd.js';
import './sp-icon-chevron100-CWW9sooh.js';
import './Chevron100-OyV1wQMZ.js';
import './sp-icon-alert-2CW9YlXi.js';
import './MatchMedia-SZ42m4IA.js';
import './DependencyManger-Dpkh1Bse.js';
import './PendingState-DveGeJwu.js';
import './get-label-from-slot-Cg6mfN40.js';
import './platform-r3Lf9REX.js';
import './class-map-DdRvesrq.js';
import './directive-Bn5c4u4M.js';
import './style-map-DtKTc8KS.js';
import './spectrum-icon-checkmark.css-CmBPoiLZ.js';
import './random-id-BST1Puzz.js';
import './divider.css-CtZfV7_5.js';
import './CheckmarkCircle-khREaDoc.js';
import './Export-D9hPW9DI.js';
import './FolderOpen-C77zO5bd.js';
import './Share-C7ia2FsH.js';
import './ShowMenu-t3rqWNPf.js';

var menu_stories = {
  component: "sp-menu",
  title: "Menu"
};
const Default = () => {
  return x`
        <sp-menu>
            <sp-menu-item>Deselect</sp-menu-item>
            <sp-menu-item>Select Inverse</sp-menu-item>
            <sp-menu-item>Feather...</sp-menu-item>
            <sp-menu-item>Select and Mask...</sp-menu-item>
            <sp-menu-divider></sp-menu-divider>
            <sp-menu-item>Save Selection</sp-menu-item>
            <sp-menu-item disabled>Make Work Path</sp-menu-item>
        </sp-menu>

        <sp-popover open>
            <sp-menu>
                <sp-menu-item>Deselect</sp-menu-item>
                <sp-menu-item>Select Inverse</sp-menu-item>
                <sp-menu-item>Feather...</sp-menu-item>
                <sp-menu-item>Select and Mask...</sp-menu-item>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-item>Save Selection</sp-menu-item>
                <sp-menu-item disabled>Make Work Path</sp-menu-item>
            </sp-menu>
        </sp-popover>
    `;
};
const singleSelect = () => {
  return x`
        <sp-menu
            selects="single"
            @change=${({
    target: { value }
  }) => {
    navigator.clipboard.writeText(value);
  }}
        >
            <sp-menu-item selected>Deselect</sp-menu-item>
            <sp-menu-item>Select Inverse</sp-menu-item>
            <sp-menu-item>Feather...</sp-menu-item>
            <sp-menu-item>Select and Mask...</sp-menu-item>
            <sp-menu-divider></sp-menu-divider>
            <sp-menu-item>Save Selection</sp-menu-item>
            <sp-menu-item disabled>Make Work Path</sp-menu-item>
        </sp-menu>

        <sp-popover open>
            <sp-menu
                selects="single"
                @change=${({
    target: { value }
  }) => {
    navigator.clipboard.writeText(value);
  }}
            >
                <sp-menu-item>Deselect</sp-menu-item>
                <sp-menu-item>Select Inverse</sp-menu-item>
                <sp-menu-item selected>Feather...</sp-menu-item>
                <sp-menu-item>Select and Mask...</sp-menu-item>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-item>Save Selection</sp-menu-item>
                <sp-menu-item disabled>Make Work Path</sp-menu-item>
            </sp-menu>
        </sp-popover>
    `;
};
const multipleSelect = () => {
  return x`
        <sp-menu selects="multiple">
            <sp-menu-item>Deselect</sp-menu-item>
            <sp-menu-item>Select Inverse</sp-menu-item>
            <sp-menu-item selected>Feather...</sp-menu-item>
            <sp-menu-item>Select and Mask...</sp-menu-item>
            <sp-menu-divider></sp-menu-divider>
            <sp-menu-item selected>Save Selection</sp-menu-item>
            <sp-menu-item disabled>Make Work Path</sp-menu-item>
        </sp-menu>

        <sp-popover open>
            <sp-menu selects="multiple">
                <sp-menu-item>Deselect</sp-menu-item>
                <sp-menu-item selected>Select Inverse</sp-menu-item>
                <sp-menu-item>Feather...</sp-menu-item>
                <sp-menu-item selected>Select and Mask...</sp-menu-item>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-item>Save Selection</sp-menu-item>
                <sp-menu-item disabled>Make Work Path</sp-menu-item>
            </sp-menu>
        </sp-popover>
    `;
};
const controlled = () => {
  const forceSelection = (event) => {
    event.target.updateComplete.then(() => {
      event.target.selected = ["Select and Mask..."];
    });
  };
  return x`
        <p>
            This Menu will default to a
            <code>selected</code>
            value of
            <code>[ 'Feather...', 'Save Selection' ]</code>
            but then on any subsequent interaction be forced to a
            <code>selected</code>
            value of
            <code>[ 'Select and Mask...' ]</code>
            .
        </p>
        <sp-menu selects="multiple" @change=${forceSelection}>
            <sp-menu-item>Deselect</sp-menu-item>
            <sp-menu-item>Select Inverse</sp-menu-item>
            <sp-menu-item selected>Feather...</sp-menu-item>
            <sp-menu-item>Select and Mask...</sp-menu-item>
            <sp-menu-divider></sp-menu-divider>
            <sp-menu-item selected>Save Selection</sp-menu-item>
            <sp-menu-item disabled>Make Work Path</sp-menu-item>
        </sp-menu>
    `;
};
controlled.swc_vrt = {
  skip: true
};
controlled.parameters = {
  // Disables Chromatic's snapshotting on a global level
  chromatic: { disableSnapshot: true }
};
const menuItemWithDescription = () => {
  return x`
        <sp-menu>
            <sp-menu-item>
                <sp-icon-export slot="icon"></sp-icon-export>
                Quick export
                <span slot="description">Share a snapshot</span>
            </sp-menu-item>
            <sp-menu-item>
                <sp-icon-folder-open slot="icon"></sp-icon-folder-open>
                Open a copy
                <span slot="description">Illustrator for iPad</span>
            </sp-menu-item>
            <sp-menu-item disabled>
                <sp-icon-share slot="icon"></sp-icon-share>
                Share link
                <span slot="description">Enable comments and download</span>
            </sp-menu-item>
        </sp-menu>

        <sp-popover open>
            <sp-menu selects="multiple">
                <sp-menu-item>Deselect</sp-menu-item>
                <sp-menu-item selected>
                    Select Inverse
                    <span slot="description">Enable inverse selection</span>
                </sp-menu-item>
                <sp-menu-item>Feather...</sp-menu-item>
                <sp-menu-item selected>Select and Mask...</sp-menu-item>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-item>Save Selection</sp-menu-item>
                <sp-menu-item disabled>
                    Make Work Path
                    <span slot="description">Create a reusable work path</span>
                </sp-menu-item>
            </sp-menu>
        </sp-popover>
    `;
};
const selectsWithIcons = () => {
  return x`
        <sp-popover open>
            <sp-menu selects="single">
                <sp-menu-item>
                    <sp-icon-export slot="icon"></sp-icon-export>
                    Quick export
                </sp-menu-item>
                <sp-menu-item selected>
                    <sp-icon-folder-open slot="icon"></sp-icon-folder-open>
                    Open a copy
                </sp-menu-item>
                <sp-menu-item>
                    <sp-icon-share slot="icon"></sp-icon-share>
                    Share link
                    <span slot="description">Enable comments and download</span>
                </sp-menu-item>
            </sp-menu>
        </sp-popover>
    `;
};
const headersAndIcons = () => {
  return x`
        <sp-popover open>
            <sp-menu selects="single">
                <sp-menu-group>
                    <span slot="header">Section Heading</span>
                    <sp-menu-item>Action 1</sp-menu-item>
                    <sp-menu-item>Action 2</sp-menu-item>
                    <sp-menu-item>Action 3</sp-menu-item>
                </sp-menu-group>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-group>
                    <span slot="header">Section Heading</span>
                    <sp-menu-item>
                        <sp-icon-checkmark-circle
                            slot="icon"
                        ></sp-icon-checkmark-circle>
                        Save
                    </sp-menu-item>
                    <sp-menu-item disabled>
                        <sp-icon-checkmark-circle
                            slot="icon"
                        ></sp-icon-checkmark-circle>
                        Download
                    </sp-menu-item>
                    <sp-menu-item disabled>
                        <sp-icon-checkmark-circle
                            slot="icon"
                        ></sp-icon-checkmark-circle>
                        Share link
                        <span slot="description">Enable comments</span>
                    </sp-menu-item>
                </sp-menu-group>
            </sp-menu>
        </sp-popover>
    `;
};
headersAndIcons.storyName = "Headers and Icons";
const Selected = () => {
  return x`
        <sp-popover open style="width: 200px;">
            <sp-menu>
                <sp-menu-group>
                    <span slot="header">San Francisco</span>
                    <sp-menu-item>Financial District</sp-menu-item>
                    <sp-menu-item>South of Market</sp-menu-item>
                    <sp-menu-item>North Beach</sp-menu-item>
                </sp-menu-group>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-group selects="single">
                    <span slot="header">Oakland</span>
                    <sp-menu-item>City Center</sp-menu-item>
                    <sp-menu-item disabled>Jack London Square</sp-menu-item>
                    <sp-menu-item selected>
                        My best friend's mom's house in the burbs just off
                        Silverado street
                    </sp-menu-item>
                </sp-menu-group>
            </sp-menu>
        </sp-popover>
    `;
};
const MenuGroupSelects = () => {
  return x`
        <sp-popover open style="width: 200px;">
            <sp-menu selects="single">
                <sp-menu-group selects="inherit">
                    <span slot="header">One of these</span>
                    <sp-menu-item>Camden</sp-menu-item>
                    <sp-menu-item>Cedar Riverside</sp-menu-item>
                    <sp-menu-item>Downtown</sp-menu-item>
                    <sp-menu-item>Northeast Arts District</sp-menu-item>
                    <sp-menu-item selected>Uptown</sp-menu-item>
                </sp-menu-group>
                <sp-menu-group selects="inherit">
                    <span slot="header">Or of these</span>
                    <sp-menu-item>Lowertown</sp-menu-item>
                    <sp-menu-item>Grand Ave</sp-menu-item>
                </sp-menu-group>
                <sp-menu-group selects="multiple">
                    <span slot="header">Many of these</span>
                    <sp-menu-item>Financial District</sp-menu-item>
                    <sp-menu-item selected>South of Market</sp-menu-item>
                    <sp-menu-item selected>North Beach</sp-menu-item>
                </sp-menu-group>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-group selects="single">
                    <span slot="header">One of these</span>
                    <sp-menu-item>City Center</sp-menu-item>
                    <sp-menu-item disabled>Jack London Square</sp-menu-item>
                    <sp-menu-item selected>
                        My best friend's mom's house in the burbs just off
                        Silverado street
                    </sp-menu-item>
                </sp-menu-group>
            </sp-menu>
        </sp-popover>
    `;
};
const selectedOffPage = () => {
  return x`
        <p style="height: 100vh; padding-bottom: 50px;">
            In this example the \`&lt;sp-menu-item selected&gt;\` element is off
            the visible page by default, but does not alter the page scroll on
            load.
        </p>
        <sp-menu>
            <sp-menu-item selected style="padding-bottom: 50px;">
                My best friend's mom's house in the burbs just off Silverado
                street
            </sp-menu-item>
        </sp-menu>
    `;
};
const MenuGroupSelectsMultiple = () => {
  return x`
        <sp-popover open style="width: 200px;">
            <sp-menu selects="multiple">
                <sp-menu-group selects="inherit">
                    <span slot="header">Many of these</span>
                    <sp-menu-item>Camden</sp-menu-item>
                    <sp-menu-item selected>Cedar Riverside</sp-menu-item>
                    <sp-menu-item selected>Downtown</sp-menu-item>
                    <sp-menu-item>Northeast Arts District</sp-menu-item>
                    <sp-menu-item>Uptown</sp-menu-item>
                </sp-menu-group>
                <sp-menu-group selects="inherit">
                    <span slot="header">And these, too</span>
                    <sp-menu-item>Lowertown</sp-menu-item>
                    <sp-menu-item selected>Grand Ave</sp-menu-item>
                </sp-menu-group>
                <sp-menu-group>
                    <span slot="header">None of these</span>
                    <sp-menu-item>Financial District</sp-menu-item>
                    <sp-menu-item>South of Market</sp-menu-item>
                    <sp-menu-item>North Beach</sp-menu-item>
                </sp-menu-group>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-group selects="single">
                    <span slot="header">One of these</span>
                    <sp-menu-item>City Center</sp-menu-item>
                    <sp-menu-item disabled>Jack London Square</sp-menu-item>
                    <sp-menu-item selected>
                        My best friend's mom's house in the burbs just off
                        Silverado street
                    </sp-menu-item>
                </sp-menu-group>
            </sp-menu>
        </sp-popover>
    `;
};
const menuWithValueSlots = () => {
  return x`
        <sp-menu style="width: 150px">
            <sp-menu-item>
                Undo
                <span slot="value">⌘​Z</span>
            </sp-menu-item>
            <sp-menu-item disabled>
                Redo
                <span slot="value">⇧⌘​Z</span>
            </sp-menu-item>
            <sp-menu-divider></sp-menu-divider>
            <sp-menu-item>
                Cut
                <span slot="value">⌘​X</span>
            </sp-menu-item>
            <sp-menu-item>
                Copy
                <span slot="value">⌘​S</span>
            </sp-menu-item>
            <sp-menu-item disabled>
                Paste
                <span slot="value">⌘​P</span>
            </sp-menu-item>
        </sp-menu>
        <sp-popover open style="width: 150px">
            <sp-menu>
                <sp-menu-item>
                    Undo
                    <span slot="value">⌘​Z</span>
                </sp-menu-item>
                <sp-menu-item disabled>
                    Redo
                    <span slot="value">⇧⌘​Z</span>
                </sp-menu-item>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-item>
                    Cut
                    <span slot="value">⌘​X</span>
                </sp-menu-item>
                <sp-menu-item>
                    Copy
                    <span slot="value">⌘​S</span>
                </sp-menu-item>
                <sp-menu-item disabled>
                    Paste
                    <span slot="value">⌘​P</span>
                </sp-menu-item>
            </sp-menu>
        </sp-popover>
    `;
};
headersAndIcons.storyName = "Dynamic MenuItems";
const dynamicRemoval = () => {
  const removeItem = async function(event) {
    var _a, _b;
    await ((_a = event.target) == null ? void 0 : _a.updateComplete);
    (_b = event.target) == null ? void 0 : _b.remove();
  };
  return x`
        <sp-menu id="casey" selects="single">
            <sp-menu-item>Deselect</sp-menu-item>
            <sp-menu-item>Select Inverse</sp-menu-item>
            <sp-menu-item id="nikkimk" @focus=${removeItem}>
                Feather...
            </sp-menu-item>
            <sp-menu-item selected>Select and Mask...</sp-menu-item>
            <sp-menu-item>Save Selection</sp-menu-item>
            <sp-menu-item disabled>Make Work Path</sp-menu-item>
        </sp-menu>
    `;
};
const __namedExportsOrder = ['Default', 'singleSelect', 'multipleSelect', 'controlled', 'menuItemWithDescription', 'selectsWithIcons', 'headersAndIcons', 'Selected', 'MenuGroupSelects', 'selectedOffPage', 'MenuGroupSelectsMultiple', 'menuWithValueSlots', 'dynamicRemoval'];

export { Default, MenuGroupSelects, MenuGroupSelectsMultiple, Selected, __namedExportsOrder, controlled, menu_stories as default, dynamicRemoval, headersAndIcons, menuItemWithDescription, menuWithValueSlots, multipleSelect, selectedOffPage, selectsWithIcons, singleSelect };
