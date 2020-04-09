import { useEffect, useState } from "react";

import { LessonType, DEFAULT_LESSON } from "../../types";

interface Props {
  lessonId: string;
}

interface UseLessonApi {
  lesson: LessonType;
}

const LESSON_RESOURCE = `${process.env.REACT_APP_SERVICE_BASE_URL}/lesson`;

const useLessonApi = ({ lessonId }: Props): UseLessonApi => {
  const [lesson, setLesson] = useState<LessonType>(DEFAULT_LESSON);

  useEffect(() => {
    async function f() {
      try {
        const response = await fetch(`${LESSON_RESOURCE}/${lessonId}`);

        setLesson((await response.json()) as LessonType);
      } catch (err) {
        setLesson(DEFAULT_LESSON);
      }
    }

    f();
  }, [lessonId, setLesson]);

  return {
    lesson,
  };
};

export default useLessonApi;
