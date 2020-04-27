import { IEmbeddedIframeSystem } from "../../../api/useEmbeddedIframeApi/types";
import { ITaskDoc, ITask, ITaskType } from "../../../api/useTaskApi/types";

import { ICourseDoc } from "../../../api/useCourseApi/types";
import { ILessonDoc } from "../../../api/useLessonApi/types";

import { createDocument } from "../testDataUtils";

export const course: ICourseDoc = createDocument({
  name: "HTML",
  description: "Learning basic HTML tags to create static pages",
});

export const lesson1: ILessonDoc = createDocument({
  courseId: course._id,
  title: "Headings and Paragraphs",
  description: "First look at the weblab in code.org, headings and paragraphs",
});

export const lesson1Task1: ITaskDoc = createDocument<ITask>({
  lessonId: lesson1._id,
  type: ITaskType.EmbeddedIframe,
  title: "Logging In",
  instruction: "Log into code.org",
  iframe: {
    system: IEmbeddedIframeSystem.codePen,
    codePenId: "123",
  },
  videoLink: "https://www.youtube.com/watch?v=wturXRf3cZQ",
});

export const lesson1Task2: ITaskDoc = createDocument<ITask>({
  lessonId: lesson1._id,
  type: ITaskType.EmbeddedIframe,
  title: "New WebLab Project",
  instruction: "Click on create -> weblab",
  iframe: {
    system: IEmbeddedIframeSystem.codePen,
    codePenId: "123",
  },
  videoLink: "https://www.youtube.com/watch?v=wturXRf3cZQ",
});

export const lesson1Task3: ITaskDoc = createDocument<ITask>({
  lessonId: lesson1._id,
  type: ITaskType.EmbeddedIframe,
  title: "Add Heading",
  instruction: "Type in <h1>Your Heading</h1> and refresh the page.",
  iframe: {
    system: IEmbeddedIframeSystem.codePen,
    codePenId: "123",
  },
  videoLink: "https://www.youtube.com/watch?v=wturXRf3cZQ",
});

export const lesson1Task4: ITaskDoc = createDocument<ITask>({
  lessonId: lesson1._id,
  type: ITaskType.EmbeddedIframe,
  title: "Add Paragraph",
  instruction: "Type in <p>Some text</p> under your heading.",
  iframe: {
    system: IEmbeddedIframeSystem.codePen,
    codePenId: "123",
  },
  videoLink: "https://www.youtube.com/watch?v=wturXRf3cZQ",
});

export const lesson2: ILessonDoc = createDocument({
  courseId: course._id,
  title: "Lists",
  description: "Creating lists (ordered & unordered)",
});

export const lesson2Task1: ITaskDoc = createDocument<ITask>({
  lessonId: lesson2._id,
  type: ITaskType.EmbeddedIframe,
  title: "Come up with List Title",
  instruction: "Add a new <h2> heading for a list",
  iframe: {
    system: IEmbeddedIframeSystem.codePen,
    codePenId: "123",
  },
  videoLink: "https://www.youtube.com/watch?v=wturXRf3cZQ",
});

export const lesson2Task2: ITaskDoc = createDocument<ITask>({
  lessonId: lesson2._id,
  type: ITaskType.EmbeddedIframe,
  title: "Add the List Tag",
  instruction: "Add a new <ol></ol> tags to wrap the entire list",
  iframe: {
    system: IEmbeddedIframeSystem.codePen,
    codePenId: "123",
  },
  videoLink: "https://www.youtube.com/watch?v=wturXRf3cZQ",
});

export const lesson2Task3: ITaskDoc = createDocument<ITask>({
  lessonId: lesson2._id,
  type: ITaskType.EmbeddedIframe,
  title: "Add the List Items",
  instruction:
    "Add a new <li></li> tags within the <ol> tag for each list item",
  iframe: {
    system: IEmbeddedIframeSystem.codePen,
    codePenId: "123",
  },
  videoLink: "https://www.youtube.com/watch?v=wturXRf3cZQ",
});
export const lesson2Task4: ITaskDoc = createDocument<ITask>({
  lessonId: lesson2._id,
  type: ITaskType.EmbeddedIframe,
  title: "Repeate for Unordered List",
  instruction: "Create a list using <ul> instead of <ol>",
  iframe: {
    system: IEmbeddedIframeSystem.codePen,
    codePenId: "123",
  },
  videoLink: "https://www.youtube.com/watch?v=wturXRf3cZQ",
});

export const lesson3: ILessonDoc = createDocument({
  courseId: course._id,
  title: "Images",
  description: "Putting images into your web page",
});

export const lesson3Task1: ITaskDoc = createDocument<ITask>({
  lessonId: lesson3._id,
  type: ITaskType.EmbeddedIframe,
  title: "Download Images",
  instruction: "Download some images from Creative Commons into your area",
  iframe: {
    system: IEmbeddedIframeSystem.codePen,
    codePenId: "123",
  },
  videoLink: "https://www.youtube.com/watch?v=wturXRf3cZQ",
});

export const lesson3Task2: ITaskDoc = createDocument<ITask>({
  lessonId: lesson3._id,
  type: ITaskType.EmbeddedIframe,
  title: "Upload Images to Project",
  instruction: "Add files -> upload each image you downloaded",
  iframe: {
    system: IEmbeddedIframeSystem.codePen,
    codePenId: "123",
  },
  videoLink: "https://www.youtube.com/watch?v=wturXRf3cZQ",
});
export const lesson3Task3: ITaskDoc = createDocument<ITask>({
  lessonId: lesson3._id,
  type: ITaskType.EmbeddedIframe,
  title: "Add Images to Page",
  instruction: "Use the <img> tag to add the images to your page.",
  iframe: {
    system: IEmbeddedIframeSystem.codePen,
    codePenId: "123",
  },
  videoLink: "https://www.youtube.com/watch?v=wturXRf3cZQ",
});

export const lesson4: ILessonDoc = createDocument({
  courseId: course._id,
  title: "Own Website",
  description: "A chance to create your own website, and a quiz!",
});

export const lesson4Task1: ITaskDoc = createDocument<ITask>({
  lessonId: lesson4._id,
  type: ITaskType.EmbeddedIframe,
  title: "Create another web page",
  instruction: "Build a page using headings, paragraphs, lists and images.",
  iframe: {
    system: IEmbeddedIframeSystem.codePen,
    codePenId: "123",
  },
  videoLink: "https://www.youtube.com/watch?v=wturXRf3cZQ",
});

export const lesson4Task2: ITaskDoc = createDocument<ITask>({
  lessonId: lesson4._id,
  type: ITaskType.EmbeddedIframe,
  title: "Quiz!",
  instruction: "Visit the google form and attempt the quiz.",
  iframe: {
    system: IEmbeddedIframeSystem.codePen,
    codePenId: "123",
  },
  videoLink: "https://www.youtube.com/watch?v=wturXRf3cZQ",
});

export const lessons: ILessonDoc[] = [lesson1, lesson2, lesson3, lesson4];

export const tasks: ITaskDoc[] = [
  lesson1Task1,
  lesson1Task2,
  lesson1Task3,
  lesson1Task4,
  lesson2Task1,
  lesson2Task2,
  lesson2Task3,
  lesson2Task4,
  lesson3Task1,
  lesson3Task2,
  lesson3Task3,
  lesson4Task1,
  lesson4Task2,
];
