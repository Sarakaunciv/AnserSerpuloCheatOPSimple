
function setTeam(id, reset)
{
	let team = Team.get(id);
	if (team == null) return;
	if (reset == 2)
	{
		const gameStateRules = Vars.state.rules;
		for (let i = 0; i < 7; i++)
		{
			let teamRule = gameStateRules.teams.get(Team.get(i));
			teamRule.buildSpeedMultiplier = 1;
		}
		gameStateRules.fog = false;
		return;
	}
	
	let player = Vars.player;
	if (reset == 1)
	{
		player.team(team);
		return;
	}
	
	let delX = player.tileX();
	let delY = player.tileY();
	let delBuild = Vars.world.build(delX, delY);
	
	if (delBuild != null && delBuild.displayName == "AnserCoreTeamChange")
	{
		player.team(team);
		delBuild.changeTeam(team);
	}
}

Events.run(Trigger.update, () => {
	if (!Vars.state.isGame()) return;
	if (Core.input.keyDown(Binding.boost))
	{
		let resetID = 0;
		if (Core.input.keyDown(Binding.blockSelect07))
		{
			resetID = 1;
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
			setTeam(0, 2);
		}
	}
});