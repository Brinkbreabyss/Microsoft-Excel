interface Course {
    id: number;
    title: string;
    duration: number;
    completed: boolean;
}

class LearningTracker {
    private courses: Course[] = [];

    addCourse(course: Course): void {
        this.courses.push(course);
    }

    markCompleted(id: number): void {
        const course = this.courses.find(item => item.id === id);

        if (course) {
            course.completed = true;
        }
    }

    completedCount(): number {
        return this.courses.filter(course => course.completed).length;
    }

    printSummary(): void {
        console.log("Learning Tracker");
        console.log("================");

        for (const course of this.courses) {
            const status = course.completed ? "Completed" : "In Progress";
            console.log(`${course.id} | ${course.title} | ${course.duration} hours | ${status}`);
        }

        console.log("================");
        console.log(`Completed Courses: ${this.completedCount()}/${this.courses.length}`);
    }
}

const tracker = new LearningTracker();

tracker.addCourse({ id: 1, title: "TypeScript Fundamentals", duration: 12, completed: false });
tracker.addCourse({ id: 2, title: "Node.js Essentials", duration: 18, completed: false });
tracker.addCourse({ id: 3, title: "Data Structures", duration: 24, completed: false });

tracker.markCompleted(1);
tracker.markCompleted(3);

tracker.printSummary();
