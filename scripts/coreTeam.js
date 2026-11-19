
function setTeam(id, reset)
{
	let team = Team.get(id);
	if (team == null) return;
	if (reset == 2)
	{
		const gameStateRules = Vars.state.rules;
		let teamRule = gameStateRules.teams.get(team);
		teamRule.buildSpeedMultiplier = 1;
		gameStateRules.fog = false;
		return;
	}
	
	let player = Vars.player;
	if (reset == 1)
	{
		player.team(team);
		lastTeam = id;
		return;
	}
	
	let delX = player.tileX();
	let delY = player.tileY();
	let delBuild = Vars.world.build(delX, delY);
	
	if (delBuild != null && delBuild.displayName == "AnserCoreTeamChange")
	{
		player.team(team);
		lastTeam = id;
		delBuild.changeTeam(team);
	}
}

var lastTeam = 0;
Events.run(Trigger.update, () => {
	if (!Vars.state.isGame()) return;
	if (Core.input.keyDown(Binding.boost))
	{
		let resetID = 0;
		if (Core.input.keyDown(Binding.blockSelect07))
		{
			let resetID = 1;
		}
		
		if (Core.input.keyTap(Binding.blockSelect01))
		{
			setTeam(1, resetID);
		}
		if (Core.input.keyTap(Binding.blockSelect02))
		{
			setTeam(2, resetID);
		}
		if (Core.input.keyTap(Binding.blockSelect03))
		{
			setTeam(3, resetID);
		}
		if (Core.input.keyTap(Binding.blockSelect04))
		{
			setTeam(4, resetID);
		}
		if (Core.input.keyTap(Binding.blockSelect05))
		{
			setTeam(5, resetID);
		}
		if (Core.input.keyTap(Binding.blockSelect06))
		{
			setTeam(6, resetID);
		}
		if (Core.input.keyDown(Binding.blockSelect08))
		{
			setTeam(lastTeam, 2);
		}
	}
});