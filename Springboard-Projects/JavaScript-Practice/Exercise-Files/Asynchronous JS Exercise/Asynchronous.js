console.log("Asynchronous JavaScript Exercise Loaded");


// Task 1: Declare The Task Array and The Interval ID
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).


let oneTimeTasks = [];
let monitoringTaskId;


// Task 2: Add One-Time Task Function
// TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. This function should add an object containing both parameters into the `oneTimeTasks` array.

function addOneTimeTask (func, delay) 
{
	oneTimeTasks.push({function: func, delay: delay});
}

// Task 3: Run One-Time Tasks Function
// TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and uses `setTimeout` to schedule each task according to its delay.

function runOneTimeTasks ()
{
	for (const task of oneTimeTasks)
	{
		setTimeout(task.function, task.delay);
	}
}

// Task 4: Start Monitoring Function
// TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.

function startMonitoring ()
{
	console.log("Monitoring space station parameters...");
	
	monitoringTaskId = setInterval(
		function ()
		{
			console.log("Checking space station conditions...");

			/* Simulated condition checks */

			const oxygenLevel = Math.random() * 100; // Simulated oxygen level percentage

			const powerStatus = Math.random() > 0.1 ? "Stable" : "Critical"; // Simulated power status

			const communicationCheck = Math.random() > 0.05 ? "All systems go" : "Communication error";
			
			// Simulated communication system check
			console.log(`Oxygen Level: ${oxygenLevel.toFixed(2)}%`);
			console.log(`Power Status: ${powerStatus}`);
			console.log(`Communication Check: ${communicationCheck}`);
		},
	   2000
	); // Adjust the interval as needed
}

// Task 5: Stop Monitoring Function
// TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.

function stopMonitoring ()
{
	clearInterval(monitoringTaskId);
	console.log("Monitoring stopped.");
}


// Task 6: Start Countdown Function
// TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.

function startCountdown (duration)
{
	let remainingTime = duration;
	console.log(`Countdown started: ${remainingTime} seconds`);


	const countdownInterval = setInterval(
		function ()
		{
			remainingTime--;
			console.log(`T-minus ${remainingTime} seconds`);

		if (remainingTime <= 0)
		{
			clearInterval(countdownInterval);
			console.log("Liftoff! The rocket has launched into space!");
		}
	},
	1000	
	);
}	



// Task 7: Schedule Pre-Launch Activities and Launch
// TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.

function scheduleMission ()
{
	startMonitoring(); // Start monitoring immediately
	addOneTimeTask(function () {console.log("Pre-launch system check complete.");}, 5000);
	addOneTimeTask(stopMonitoring, 10000); // Stop monitoring before countdown
	addOneTimeTask(function () {startCountdown(10);}, 11000); // Start countdown after monitoring stops

	runOneTimeTasks(); // Execute all scheduled one-time tasks
}

scheduleMission(); // Initiate the mission scheduling	

