
function setTeam(id, reset)
{
	let player = Vars.player;
	if (reset)
	{
		player.team(team);
		return;
	}
	let delX = player.tileX();
	let delY = player.tileY();
	let delBuild = Vars.world.build(delX, delY);
	let team = Team.get(id);
	if (delBuild != null && team != null && delBuild.displayName == "AnserCoreTeamChange")
	{
		player.team(team);
		delBuild.changeTeam(team);
	}
}

Events.run(Trigger.update, () => {
	if (!Vars.state.isGame()) return;
	if (Core.input.keyDown(Binding.boost))
	{
		if (Core.input.keyTap(Binding.blockSelect01))
		{
			setTeam(1, Core.input.keyDown(Binding.blockSelect07));
		}
		if (Core.input.keyTap(Binding.blockSelect02))
		{
			setTeam(2, Core.input.keyDown(Binding.blockSelect07));
		}
		if (Core.input.keyTap(Binding.blockSelect03))
		{
			setTeam(3, Core.input.keyDown(Binding.blockSelect07));
		}
		if (Core.input.keyTap(Binding.blockSelect04))
		{
			setTeam(4, Core.input.keyDown(Binding.blockSelect07));
		}
		if (Core.input.keyTap(Binding.blockSelect05))
		{
			setTeam(5, Core.input.keyDown(Binding.blockSelect07));
		}
		if (Core.input.keyTap(Binding.blockSelect06))
		{
			setTeam(6, Core.input.keyDown(Binding.blockSelect07));
		}
	}
});