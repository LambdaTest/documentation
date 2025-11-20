---
id: smartui-smart-comments
title: SmartUI Smart Comments
description: Learn how to collaborate on visual test results using Smart Comments. Add comments directly on screenshots and builds, mention teammates, and manage threaded discussions for better team collaboration.
slug: smartui-smart-comments/
keywords:
  - SmartUI comments
  - Smart Comments
  - Visual testing collaboration
  - Screenshot comments
  - Team collaboration
  - Comment threads
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

Smart Comments enables real-time collaboration on SmartUI visual test results. Add comments directly on screenshots and builds, mention teammates, and manage threaded discussions—all without leaving the SmartUI dashboard.

**Key Benefits:**
- **Contextual Discussions**: Comment directly on specific screenshots and builds
- **Team Collaboration**: Mention teammates using @mentions
- **Threaded Conversations**: Reply to comments to create discussion threads
- **Comment Management**: Mark comments as resolved or keep them active
- **Draft Comments**: Auto-saved drafts persist across the session
- **Comment History**: All comments are retained and searchable

> Need help with other SmartUI features? Jump to the [SmartUI Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide/).

---

## Where Comments Appear

Comments can be added and viewed in multiple locations within SmartUI:

### 1. Screenshot Level

Comments appear on individual screenshots with a comment icon indicator showing the total number of comments.

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/smart-comments/comment_icon.png').default} alt="Comment icon on screenshot" />

**Comment indicators:**
- Comment icon with count in the screenshot header
- Comment count badge showing total comments for that screenshot

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/smart-comments/commenttag_screenshotheader.png').default} alt="Comment tag in screenshot header" />

### 2. Build Level

Comments can be viewed at the build level, showing the total count of comments across all screenshots in the build.

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/smart-comments/commenttag_build.png').default} alt="Comment tag at build level" />

### 3. Comment Drawer

Access all comments via the **Comment** button in the Actions tab. The comment drawer displays all comments for the current build or screenshot.

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/smart-comments/comment_drawer.png').default} alt="Comment drawer with all comments" />

---

## How to Add Comments

You can add comments from multiple locations in SmartUI:

### 1. Screenshot Comment Box

Add comments directly on a screenshot using the comment textbox in the screenshot drawer.

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/smart-comments/firstcomment_textbox.png').default} alt="Comment textbox in screenshot drawer" />

**Steps:**
1. Open a screenshot from the build view
2. Locate the comment textbox in the screenshot drawer
3. Type your comment (max 500 characters)
4. Click **Post** to publish your comment

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/smart-comments/firstcomment_posted.png').default} alt="Comment posted successfully" />

### 2. Accept/Reject Modals

Add optional comments when approving or rejecting screenshots.

#### Accept Modal

When accepting a screenshot, you can add an optional comment:

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/smart-comments/optionalcomment_accept.png').default} alt="Optional comment in Accept modal" />

**Modal options:**
- **Accept**: Approve only that specific viewport and browser
- **Accept All**: Approve in all viewports and browsers of the screenshot

#### Accept All Modal

Add comments when accepting all variants:

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/smart-comments/optionalcomment_acceptall.png').default} alt="Optional comment in Accept All modal" />

#### Reject Modal

Add comments when rejecting screenshots:

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/smart-comments/optionalcomment_reject.png').default} alt="Optional comment in Reject modal" />

**Modal options:**
- **Reject**: Reject only that specific viewport and browser
- **Reject All**: Reject in all viewports and browsers of the screenshot

### 3. Move to Baseline Modal

Add comments when moving screenshots to baseline:

**Modal options:**
- **Move**: Move only that specific viewport and browser
- **Move All**: Move in all viewports and browsers of the screenshot

### 4. Bulk Operations Comment Box

Add comments when performing bulk operations (multiselect):

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/smart-comments/optionalcomment_customselection.png').default} alt="Comment box in bulk operations" />

**Steps:**
1. Select multiple screenshots using [multiselect](/support/docs/smartui-multiselect-bulkops/)
2. Choose your bulk action (Approve, Reject, Move to Baseline)
3. Add an optional comment in the comment box
4. Confirm the action

---

## Comment Features

### Draft Comments (Auto-Save)

Smart Comments automatically saves your comment drafts for the active session. If you start typing a comment but close the modal or navigate away, your draft will be preserved.

**How it works:**
- Drafts are saved automatically as you type
- Drafts persist across modals and pages during the session
- You can retrieve and post your draft from any comment box

**Example scenarios:**

**1. Draft in Accept Modal:**
<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/smart-comments/autosaveddraft_textbox.png').default} alt="Auto-saved draft in textbox" />

If you write a comment in the Accept modal but close it, the draft is saved.

**2. Draft in Reject Modal:**
<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/smart-comments/autoasveddraft_reject.png').default} alt="Auto-saved draft in Reject modal" />

**3. Draft in Multiselect:**
<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/smart-comments/autosaveddraft_multiselect.png').default} alt="Auto-saved draft in multiselect" />

You can then post the saved draft from:
- The comment textbox in the screenshot drawer
- Any modal (Accept, Reject, Move)
- The bulk operations comment box

> **Note:** Drafts are session-based and will be cleared when you refresh the page or start a new session.

### Mentions (@mentions)

Mention teammates in your comments to notify them and bring them into the discussion.

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/smart-comments/at_mention.png').default} alt="Using @mention in comments" />

**How to mention:**
1. Type `@` in the comment box
2. Start typing the teammate's name
3. Select from the dropdown list
4. The mentioned user will be highlighted in the comment


### Threaded Comments

Reply to existing comments to create threaded discussions.

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/smart-comments/firstthreadcomment_textbox_posted.png').default} alt="Threaded comment reply" />

**How to reply:**
1. Click **Reply** on any existing comment
2. Type your reply in the textbox
3. Click **Post** to add your reply to the thread

Threaded comments help maintain context and organize discussions around specific topics.

### Comment States

Comments can be in two states:

#### Unresolved (Active)

Unresolved comments are active and visible in the main comments list.

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/smart-comments/unresolved_state.png').default} alt="Unresolved comments state" />

**Characteristics:**
- Visible in the main comments view
- Require attention or follow-up
- Can be marked as resolved when addressed

#### Resolved (Archived)

Resolved comments are archived and moved to a separate column.

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/smart-comments/resolved_state.png').default} alt="Resolved comments state" />

**Characteristics:**
- Moved to the "Resolved" column
- Still accessible for reference
- Can be reopened if needed

**How to resolve:**
1. Open the comment drawer
2. Find the comment you want to resolve
3. Click **Mark as Resolved** or **Mark as Done**
4. The comment moves to the Resolved column

**How to reopen:**
1. Navigate to the Resolved column
2. Find the comment you want to reopen
3. Click **Reopen** or **Mark as Unresolved**
4. The comment moves back to the Active column

---

## Comment Management

### Viewing Comments

#### Screenshot Drawer

View comments directly in the screenshot drawer:

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/smart-comments/commenttag_screenshotdrawer.png').default} alt="Comments in screenshot drawer" />

#### Comment Drawer (Actions Tab)

Access all comments via the **Comment** button in the Actions tab:

1. Open a build
2. Click the **Actions** tab
3. Click the **Comment** button
4. View all comments in the comment drawer

The comment drawer shows:
- All comments for the current build
- Screenshot-level comment counts
- Resolved and unresolved comments in separate columns

### Comment Count Indicators

Comment counts are displayed at multiple levels:

| Location | Indicator | Description |
|----------|-----------|-------------|
| **Screenshot Header** | Comment icon with number | Total comments for that specific screenshot |
| **Build Level** | Comment count badge | Total comments across all screenshots in the build |
| **Screenshot Drawer** | Comment count in drawer | Comments visible in the drawer view |

### Comment History

All comments are retained and searchable:
- Comments persist even after screenshots are approved or rejected
- Comment history is maintained per screenshot ID
- You can search and filter comments in the comment drawer

---

## Special Cases

### Delete Screenshot

When a screenshot is deleted, **all associated comments are also deleted**.

> **Important:** Deletion is permanent. Make sure to export or save important comment discussions before deleting screenshots.

### Move to Baseline / Overwrite

When screenshots are moved to baseline or overwritten:
- **Comments are not transferred** to the new baseline screenshot
- Comments remain with the original screenshot ID
- If the original screenshot is replaced, comments are deleted

> **Note:** Comments are mapped to Screenshot IDs. When a screenshot is overwritten, the new screenshot has a different ID, so comments don't carry over.

### Screenshot Variants

Comments are specific to each screenshot variant (viewport + browser combination):
- Comments on one variant don't appear on other variants
- Each variant maintains its own comment thread
- Use "Accept All" or "Reject All" with comments to apply the same comment across all variants

---

## Best Practices

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='use-mentions' label='Use Mentions Strategically' default>

**Use Mentions Strategically**

- Mention relevant team members when their input is needed
- Use @mentions to bring attention to critical visual issues
- Avoid over-mentioning—only tag people who need to be involved
- Combine mentions with clear action items in your comments

</TabItem>
<TabItem value='organize-threads' label='Organize with Threads'>

**Organize with Threads**

- Reply to existing comments to maintain context
- Create separate comment threads for different topics
- Use threads to track discussions on specific visual changes
- Keep threads focused on one issue or question

</TabItem>
<TabItem value='resolve-comments' label='Resolve When Complete'>

**Resolve When Complete**

- Mark comments as resolved when issues are addressed
- Keep the active comments list clean and focused
- Reopen resolved comments if follow-up is needed
- Use resolved comments as a reference for similar issues

</TabItem>
<TabItem value='add-context' label='Add Context in Comments'>

**Add Context in Comments**

- Include specific details about what you're commenting on
- Reference the viewport, browser, or specific UI element
- Explain why a change is acceptable or needs revision
- Link to related tickets or documentation when relevant

</TabItem>
<TabItem value='use-bulk-comments' label='Use Bulk Operation Comments'>

**Use Bulk Operation Comments**

- Add comments when performing bulk approve/reject operations
- Explain the reasoning for bulk actions
- Use bulk comments to document batch approvals or rejections
- Combine with [multiselect](/support/docs/smartui-multiselect-bulkops/) for efficient workflows

</TabItem>
<TabItem value='draft-management' label='Manage Drafts'>

**Manage Drafts**

- Review your draft before posting from a different location
- Use drafts to compose longer comments across multiple steps
- Clear drafts if you change your mind (refresh the page)
- Remember that drafts are session-based only

</TabItem>
</Tabs>

---

## Troubleshooting

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='comment-not-appearing' label='Comment Not Appearing' default>

**Issue: Comment Not Appearing**

**Symptoms**: Comment was posted but doesn't show up in the comments list.

**Solutions**:
1. Refresh the page to reload comments
2. Check if you're viewing the correct screenshot or build
3. Verify the comment wasn't filtered out (check Resolved column)
4. Ensure you have proper permissions to view comments
5. Check the comment drawer in the Actions tab

</TabItem>
<TabItem value='draft-not-saving' label='Draft Not Saving'>

**Issue: Draft Not Saving**

**Symptoms**: Draft comment disappears after closing modal or navigating.

**Solutions**:
1. Drafts are session-based—ensure you haven't refreshed the page
2. Drafts persist only during the active browser session
3. Try posting the draft immediately if you need to preserve it
4. Check browser console for any JavaScript errors

</TabItem>
<TabItem value='mention-not-working' label='Mention Not Working'>

**Issue: @Mention Not Working**

**Symptoms**: Can't find teammates when typing @mention.

**Solutions**:
1. Ensure teammates are added to the project as approvers or members
2. Type the full name or email address
3. Wait for the dropdown to populate
4. Check your network connection
5. Verify you have permission to mention users

</TabItem>
<TabItem value='comment-limit' label='Comment Character Limit'>

**Issue: Comment Too Long**

**Symptoms**: Can't post comment or character count exceeds limit.

**Solutions**:
1. Maximum comment length is **500 characters**
2. Break long comments into multiple shorter comments
3. Use threaded replies to continue the discussion
4. Check the character counter in the comment box

</TabItem>
<TabItem value='comments-deleted' label='Comments Deleted Unexpectedly'>

**Issue: Comments Deleted Unexpectedly**

**Symptoms**: Comments disappeared after an action.

**Solutions**:
1. **Screenshot deleted**: Comments are deleted when screenshots are deleted
2. **Move to baseline**: Comments don't transfer to new baseline screenshots
3. **Overwrite**: Comments are deleted when screenshots are overwritten
4. Check if comments were moved to the Resolved column
5. Verify you're viewing the correct build or screenshot

</TabItem>
<TabItem value='resolve-not-working' label='Resolve/Unresolve Not Working'>

**Issue: Can't Resolve or Unresolve Comments**

**Symptoms**: Resolve button doesn't work or comments don't move.

**Solutions**:
1. Refresh the page and try again
2. Check if you have permission to resolve comments
3. Verify the comment drawer is fully loaded
4. Try clicking the comment directly to open the resolve option
5. Check browser console for errors

</TabItem>
</Tabs>

---

## Comment Workflow Examples

<Tabs className='docs__val' groupId='workflow'>
<TabItem value='review-workflow' label='Review Workflow' default>

**Scenario:** Reviewing visual changes and adding comments for the team.

1. Open a build with visual changes
2. Navigate to **Changes Found** tab
3. Open a screenshot with differences
4. Add a comment explaining the change: "This color update matches the new design system"
5. Mention the designer: "@designer-name, can you confirm this is expected?"
6. Wait for reply in the comment thread
7. Mark comment as resolved once confirmed

</TabItem>
<TabItem value='bulk-approval-comment' label='Bulk Approval with Comment'>

**Scenario:** Approving multiple screenshots with a bulk comment.

1. Use [multiselect](/support/docs/smartui-multiselect-bulkops/) to select multiple screenshots
2. Click **Approve** in the toolbar
3. Add a comment: "All screenshots approved after design system update"
4. Confirm the bulk approval
5. Comment appears in all selected screenshots' comment lists

</TabItem>
<TabItem value='reject-with-explanation' label='Reject with Explanation'>

**Scenario:** Rejecting a screenshot and explaining why.

1. Open a screenshot with unexpected changes
2. Click **Reject** button
3. Add a comment in the reject modal: "This breaks the mobile layout. Needs fix before approval."
4. Mention the developer: "@dev-name, please review the responsive breakpoints"
5. Confirm rejection
6. Comment is saved and visible in the comment drawer

</TabItem>
<TabItem value='threaded-discussion' label='Threaded Discussion'>

**Scenario:** Having a discussion about a visual change.

1. QA adds initial comment: "Is this color change intentional?"
2. Designer replies: "Yes, this is part of the rebrand. Approved."
3. Developer adds: "I'll update the CSS to match the new palette."
4. QA marks the thread as resolved once the change is implemented
5. All participants can see the full discussion thread

</TabItem>
<TabItem value='draft-recovery' label='Draft Recovery'>

**Scenario:** Starting a comment in one place and finishing it elsewhere.

1. Open Accept modal and start typing: "This looks good, but..."
2. Close the modal without posting
3. Navigate to screenshot drawer
4. Open comment textbox—your draft appears
5. Complete the comment and post it
6. Draft is cleared after posting

</TabItem>
</Tabs>

---

## Future Enhancements

The following features are planned for future releases:

- **Email/Slack Notifications**: @mentions will trigger email and Slack notifications
- **RBAC (Role-Based Access Control)**: Users can edit/delete their own comments; Admins can moderate all comments
- **Cross-Build Comments**: Comments across builds for the same screenshot name (optional feature)
- **Area-Specific Comments**: Comments on specific areas of a screenshot using drawing boxes

---

## Next Steps

- Learn about [SmartUI Multiselect & Bulk Operations](/support/docs/smartui-multiselect-bulkops/) to combine comments with bulk actions
- Explore [SmartUI Best Practices](/support/docs/smartui-best-practices/) for efficient visual testing workflows
- Check the [SmartUI Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide/) for common issues

