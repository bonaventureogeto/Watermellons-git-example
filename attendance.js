const attendance = [1, 0, 1, 1, 0, 1, 0, 1, 1, 0];
// 1 = Present, 0 = Absent

function analyzeAttendance(attendanceList) {
    let present = 0;
    let absent = 0;
    for (let item = 0; item < attendanceList.length; item++){
        if (attendanceList[item] === 1) {
            present = present + 1;
        } else if (attendanceList[item] === 0) {
            absent = absent + 1;
        } else {
            console.log("Invalid Record");
        }
    }

    let totalDays = attendanceList.length;
    let percentage = (present / totalDays) * 100;
    let status;
    
    if (percentage >= 80) {
        status = "EXCELLENT";
    } else if (percentage >= 60) {
        status = "OK";
    } else {
        status = "POOR";
    }

    return {
        totalDays: totalDays,
        present: present,
        absent: absent,
        percentage: percentage,
        status: status
    };
}

console.log(analyzeAttendance(attendance));